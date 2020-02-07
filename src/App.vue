<template>
	<div id="app">
        <Header />
		<router-view />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "@/components/Header.vue";

@Component({
	components: {
        Header,
		HelloWorld
	}
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Raleway:400,500,700,900&display=swap')

body
    margin: unset
    min-height: 100vh

#app
	font-family: 'Libre Baskerville', serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	background-color: black
	color: white
	min-height: inherit
    font-size: 16px

</style>
