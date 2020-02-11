<template>
	<div class="album-page__vinyl">
		<img src="@/assets/vinyl.png" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class AlbumPageVinyl extends Vue {}
</script>

<style lang="sass" scoped>
.album-page__vinyl
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

@keyframes vinylRotation 
    from 
        transform: rotate(0deg)
    to 
        transform: rotate(360deg)
    
</style>