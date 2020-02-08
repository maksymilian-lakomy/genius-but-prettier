<template>
	<div class="album-page">
		<div class="album-page__vinyl">
			<img src="@/assets/vinyl.png" />
		</div>
		<div class="album-page__content">
			<nav ref="nav">
				<span>
					<button :class="{'nav__button--active': activeButton === 0}" @click="onNavButtonClick($event, 0)">About</button>
					<button :class="{'nav__button--active': activeButton === 1}" @click="onNavButtonClick($event, 1)">Songs</button>
				</span>
				<span>
					<button :class="{'nav__button--active': activeButton === 2}" @click="onNavButtonClick($event, 2)">Scott Walker</button>
				</span>
                <div class = "nav__pointer" :style="{'left': navPointerLeftInPercentage}"/>
			</nav>
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

    get navPointerLeftInPercentage() {
        return `${this.navPointerLeft*100}%`;
    }

    onNavButtonClick(event: Event, buttonClicked: number): void {
        this.activeButton = buttonClicked;
        if (buttonClicked === 0) {
            this.navPointerLeft = 0;
            return;
        } 
        if (!(event.srcElement instanceof HTMLElement))
            return;
        if (!(this.$refs.nav instanceof HTMLElement))
            return;
        let element: HTMLElement = event.srcElement;
        let navWidth: number = this.$refs.nav.clientWidth;
        if (buttonClicked < 2) {
            let halfPointerPercentage: number = 3 / navWidth;
            this.navPointerLeft = (((element.offsetWidth / 2) + element.offsetLeft) / navWidth) - halfPointerPercentage;
            return;
        }
        let pointerPercentage: number = 6 / navWidth;
        this.navPointerLeft = 1 - pointerPercentage;
        return;
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
    
    &__content
        padding: 2.5rem 1.875rem

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
            display: flex
            flex-direction: row
            justify-content: space-between
            margin-bottom: calc(1.5rem + 6px + .75rem)
            position: relative

            button
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