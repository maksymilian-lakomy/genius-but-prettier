<template>
	<div class="album-cover">
		<div class="album-cover__content">
			<AlbumCoverDescription style = "margin-bottom: 2rem; z-index: 100"/>
			<IconButton class = "album-cover__content__button" :text="'See more'">\/</IconButton>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlbumCoverDescription from "@/components/AlbumCoverDescription.vue";
import IconButton from "@/components/IconButton.vue";

@Component({
	components: {
		AlbumCoverDescription,
		IconButton
	},
})
export default class AlbumCover extends Vue {}
</script>

<style lang="sass" scoped>
@import "@/styles/variables.sass"

.album-cover
    padding-top: $headerOffset
    display: flex
    flex-direction: column
    justify-content: flex-end
    height: calc(100% - #{$headerOffset})
    background-image: url(https://www.1001albums.co.uk/wp-content/uploads/2016/06/Scott-Walker-Scott-4.png)
    position: relative
    z-index: 0

    &__content
        position: relative
        padding: 2.5rem 1.875rem
        display: flex
        flex-direction: inherit

        &__button
            opacity: .5
            width: fit-content
            text-align: center
            margin: auto

            &:hover
                opacity: 1
        
        &::before
            position: absolute
            content: ""
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)
            left: 0
            bottom: 0
            width: 100%
            height: 125%
            z-index: -1


    &::before
        position: absolute
        content: ""
        width: 100%
        height: 100%
        background-size: cover
        background-position: center
        background-image: inherit
        z-index: -2

    &::after
        content: ""
        background-color: black
        opacity: 0.3
        width: 100%
        height: 100%
        position: absolute
        height: 100%
        width: 100% 
        z-index: -1
</style>