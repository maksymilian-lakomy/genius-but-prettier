<template>
	<nav ref="nav">
		<span>
			<button
				:class="{'nav__button--active': activeButton === 0}"
				@click="onNavButtonClick($event, 0), pushView('about')"
			>About</button>
			<button
				:class="{'nav__button--active': activeButton === 1}"
				@click="onNavButtonClick($event, 1), pushView('songs')"
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RouterPushMixin from "@/mixins/RouterPushMixin.ts";

@Component ({
    mixins: [
        RouterPushMixin
    ]
})
export default class AlbumPageNavigationBar extends Vue {
	activeButton: number = 0;
    navPointerLeft: number = 0;
    
	get navPointerLeftInPercentage() {
		return `${this.navPointerLeft * 100}%`;
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
}
</script>

<style lang="sass" scoped>
@import "@/styles/variables"

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
</style>