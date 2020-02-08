<template>
	<div class="album-page">
		<div class="album-page__vinyl">
			<img src="@/assets/vinyl.png" />
		</div>
		<article class = "album-page__content">
			<h1>Scott 4</h1>
			<h2 class = "date">1969</h2>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AlbumPage extends Vue {}
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
    overflow-x: hidden

    &__vinyl
        width: 100%
        top: 0
        margin-top: -50%
        position: absolute
        z-index: -1

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

@keyframes vinylRotation 
    from 
        transform: rotate(0deg)
    to 
        transform: rotate(360deg)
</style>