<template>
	<section>
		<h2>Scott Walker</h2>
		<h1>Scott 4</h1>
		<p>
			It was originally released in late 1969 under
			his birth name, Scott Engel, and failed to
			chart. Subsequent reissues have been...
		</p>
        <h3 class = "section--date">1969</h3>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class AlbumCoverDescription extends Vue {

}
</script>

<style lang="sass" scoped>
section
    margin: 0 1.875rem

    h1,h2,h3,h4,h5,h6
        font-family: Raleway, sans-Serif
        margin: unset
        margin-bottom: 8px

    h1
        font-size: 2.875rem
        font-weight: 900
        text-transform: uppercase

    h2
        font-size: 1.375rem

    h3
        font-weight: 500
        font-size: 1rem

    .section--date
        $margin-top: 3rem
        position: relative
        text-align: center
        margin-top: $margin-top

        &:before
            $width: 2.5rem
            position: absolute
            content: ""
            height: 1px
            width: $width
            top: calc(#{$margin-top} / -2)
            left: calc(50% - #{$width} / 2)
            background-color: white


    p
        line-height: 1.5rem
        margin: unset
        opacity: .8
</style>