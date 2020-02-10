<template>
	<div class="album-page">
		<nav ref="nav">
			<span>
				<button
					:class="{'nav__button--active': activeButton === 0}"
					@click="onNavButtonClick($event, 0)"
				>About</button>
				<button
					:class="{'nav__button--active': activeButton === 1}"
					@click="onNavButtonClick($event, 1)"
				>Songs</button>
			</span>
			<span>
				<button
					:class="{'nav__button--active': activeButton === 2}"
					@click="onNavButtonClick($event, 2)"
				>Scott Walker</button>
			</span>
			<div class="nav__pointer" :style="{'left': navPointerLeftInPercentage}" />
		</nav>
		<div class="album-page__vinyl">
			<img src="@/assets/vinyl.png" />
		</div>
		<div class="album-page__content" @scroll="onContentScroll($event)" ref="content">
			<div
				class="album-page__content__shadow-top"
				:class="{'album-page__content__shadow--active': !onTopOfContent}"
			/>
			<div
				class="album-page__content__shadow-bottom"
				:class="{'album-page__content__shadow--active': !onBottomOfContent}"
			/>
			<article>
				<h1>Scott 4</h1>
				<h2 class="date">1969</h2>
				<p>
					It is Scott Walker's fifth solo album. It was originally released in late 1969 under his birth name, Scott Engel, and failed to chart.
					Subsequent reissues have been released under his stage name. It has since received praise as one of Walker's best works.
				</p>
				<p>
					Scott 4 was the first Walker album to consist solely of self-penned songs—Scott, Scott 2 and Scott 3 had each featured translations of Jacques Brel songs, which were later compiled to form the album Scott Walker Sings Jacques Brel,
					which were later compiled to form the album Scott Walker Sings Jacques Brel, and the earlier albums had also featured some songs from other sources.
				</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut aliquet metus, ut scelerisque risus. Curabitur sed consequat quam. Morbi sodales imperdiet augue id condimentum. Ut ut consequat tellus. Fusce iaculis dolor eleifend neque blandit, in maximus felis ultrices. Quisque maximus volutpat ex, nec volutpat arcu. Sed placerat eros porttitor, efficitur neque id, dictum nisl. Nunc quis fermentum urna, lobortis lobortis nunc. Phasellus fringilla lacus et nisi dapibus faucibus. Phasellus arcu elit, faucibus in dui nec, finibus pulvinar eros. Morbi orci augue, tincidunt at congue sit amet, consectetur sed ligula.</p>
			</article>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AlbumPage extends Vue {
	activeButton: number = 0;
	navPointerLeft: number = 0;
	onTopOfContent: boolean | undefined = true;
	onBottomOfContent: boolean | undefined = false;

	get navPointerLeftInPercentage() {
		return `${this.navPointerLeft * 100}%`;
    }
    
    mounted(): void {
        if (!(this.$refs.content instanceof HTMLElement))
            return;
        let element: HTMLElement = this.$refs.content;
        if (element.scrollHeight > element.clientHeight)
            this.onBottomOfContent = false;
        else 
            this.onBottomOfContent = true;
    }

	onNavButtonClick(event: Event, buttonClicked: number): void {
		this.activeButton = buttonClicked;
		if (buttonClicked === 0) {
			this.navPointerLeft = 0;
			return;
		}
		if (!(event.srcElement instanceof HTMLElement)) return;
		if (!(this.$refs.nav instanceof HTMLElement)) return;
		let element: HTMLElement = event.srcElement;
		let navWidth: number = this.$refs.nav.clientWidth;
		if (buttonClicked < 2) {
			let halfPointerPercentage: number = 3 / navWidth;
			this.navPointerLeft =
				(element.offsetWidth / 2 + element.offsetLeft) / navWidth -
				halfPointerPercentage;
			return;
		}
		let pointerPercentage: number = 6 / navWidth;
		this.navPointerLeft = 1 - pointerPercentage;
		return;
	}

	onContentScroll(event: Event): void {
		if (!(event.srcElement instanceof HTMLElement)) return;
		let element: HTMLElement = event.srcElement;
        if (element.scrollTop > 0)
            this.onTopOfContent = false;
        else 
            this.onTopOfContent = true;
		if (element.scrollTop == element.scrollHeight - element.clientHeight)
			this.onBottomOfContent = true;
        else
            this.onBottomOfContent = false;
	}
}
</script>

<style lang="sass" scoped>
@import "@/styles/variables.sass"

.album-page
    padding-top: $headerOffset
    display: flex
    flex-direction: column
    justify-content: flex-start
    height: calc(100% - #{$headerOffset})
    position: relative
    z-index: 0

    &__vinyl
        width: 100%
        top: 0
        margin-top: -50%
        position: absolute
        z-index: -1
        overflow: hidden

        &::before
            z-index: 100
            position: absolute
            content: ""
            height: 100%
            width: 100%
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)

        img
            width: 100%
            opacity: .8
            animation-duration: calc(60 / 33.33 * 1s)
            animation-name: vinylRotation
            animation-iteration-count: infinite
            animation-timing-function: linear

        @media (min-width: 960px)
            text-align: center
            margin-top: -25%

            img
                width: 50%
    
    &__content
        margin: 0 $content-width-margins
        overflow-y: scroll
        position: relative

        &__shadow-top, &__shadow-bottom
            position: fixed
            opacity: 0
            width: calc(100% - 2 * #{$content-width-margins})
            transition-duration: .3s

        &__shadow-top
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)
            height: 3rem

        &__shadow-bottom
            bottom: 0
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)
            height: 7rem

        &__shadow--active
            opacity: 1

        h1, h2
            text-align: center
            margin: 0

        h1
            font-family: "Raleway", sans-serif
            font-size: 1.375rem
            font-weight: bold
            margin-bottom: .75rem

        h2
            font-family: "Raleway", sans-serif
            font-size: 1rem
            font-weight: 400
            margin-bottom: 1.5rem

        .date
            opacity: .8

        p
            line-height: 1.5rem
            margin-bottom: 8px

    nav
        margin: 0 $content-width-margins
        display: flex
        flex-direction: row
        justify-content: space-between
        margin-bottom: calc(1.5rem + 6px + .75rem)
        position: relative

        button
            cursor: pointer
            background: unset
            color: inherit
            border: unset
            outline: unset
            font-family: "Raleway", sans-serif
            font-weight: 500
            opacity: .4
            padding: 0
            margin: 0 .75rem

            &:first-of-type
                margin-left: 0

            &:last-of-type
                margin-right: 0
                

        .nav__button--active
            opacity: 1

        .nav__pointer
            transition-duration: .3s
            position: absolute
            bottom: calc(-1 * (.75rem + 6px))
            height: 6px
            width: 6px
            background-color: white
            border-radius: 50%

@keyframes vinylRotation 
    from 
        transform: rotate(0deg)
    to 
        transform: rotate(360deg)
</style>