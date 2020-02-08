<template>
	<div id="app">
		<Header />
		<AlbumCover />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import AlbumCover from "@/components/AlbumCover.vue";

@Component({
	components: {
		Header,
		AlbumCover
	}
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Raleway:400,500,700,900&display=swap')
html
    height: 100%

body
    margin: unset
    height: inherit

#app
	font-family: 'Libre Baskerville', serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	background-color: black
	color: white
	position: relative
	height: inherit

</style>
