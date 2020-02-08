<template>
	<div class = "button">
		<slot />
	</div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class IconButton extends Vue {}
</script>

<style lang="sass" scoped>
button
    position: relative
    color: inherit
    border: unset
    background-color: unset
    outline: unset
    margin: unset
    padding: unset
    height: 1.5rem
    width: 1.5rem

    &::before
        cursor: pointer
        content: ""
        position: absolute
        width: 200%
        height: 200%
        top: -50%
        left: -50%
</style>