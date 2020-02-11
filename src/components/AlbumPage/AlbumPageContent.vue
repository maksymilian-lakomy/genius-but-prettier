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
		<div>
			<slot />
		</div>
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

<style lang="sass">
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