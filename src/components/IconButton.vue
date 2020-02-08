<template>
	<button class="button">
		<slot />
		<span v-if="text" v-html="text"/>
	</button>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class IconButton extends Vue {
	@Prop({type: String, default: undefined}) readonly text: string | undefined;
}
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
    min-height: 1.5rem
    min-width: 1.5rem

    &::before
        cursor: pointer
        content: ""
        position: absolute
        width: 200%
        height: 200%
        top: -50%
        left: -50%

    span
        font-family: "Raleway", sans-serif
        font-size: .75rem
        font-weight: 500
        display: block
        text-align: center
        margin-top: 4px
</style>