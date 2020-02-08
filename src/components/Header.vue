<template>
	<header>
		<nav class="nav--left">
			<IconButton>A</IconButton>
		</nav>
		<nav class="nav--center">
			<IconButton>B</IconButton>
		</nav>
		<nav class="nav--right">
			<IconButton>C</IconButton>
		</nav>
	</header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconButton from "@/components/IconButton.vue";

@Component({
    components: {
        IconButton
    },
})
export default class App extends Vue {
}
</script>

<style lang="sass" scoped>
header
    display: grid
    grid-template-columns: repeat(3, calc(100% / 3))
    position: absolute
    width: 100%
    z-index: 10000

    nav
        height: 1.5rem
        margin: 2.5rem 1.25rem

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

    .nav--left
        text-align: left

    .nav--center
        text-align: center

    .nav--right
        text-align: right
        

</style>