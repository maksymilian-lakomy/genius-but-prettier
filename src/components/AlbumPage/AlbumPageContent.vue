<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AlbumPageContent extends Vue {
	onTopOfContent: boolean | undefined = true;
	onBottomOfContent: boolean | undefined = false;

	mounted(): void {
		if (!(this.$refs.content instanceof HTMLElement)) return;
		let element: HTMLElement = this.$refs.content;
		if (element.scrollHeight > element.offsetHeight)
			this.onBottomOfContent = false;
		else this.onBottomOfContent = true;
	}

	onContentScroll(event: Event): void {
		if (!(event.srcElement instanceof HTMLElement)) return;
		let element: HTMLElement = event.srcElement;
		if (element.scrollTop > 0) this.onTopOfContent = false;
		else this.onTopOfContent = true;
		if (element.scrollTop == element.scrollHeight - element.offsetHeight)
			this.onBottomOfContent = true;
		else this.onBottomOfContent = false;
	}
}
</script>

<style lang="sass" scoped>
@import "@/styles/variables.sass"

.album-page__content
    margin: 0 $content-width-margins
    margin-bottom: $content-height-margins
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
</style>