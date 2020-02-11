<template>
	<article>
		<h1>Scott 4</h1>
		<h2 class="date">1969</h2>
		<p>
			It is Scott Walker's fifth solo album. It was originally released in late 1969 under his birth name, Scott Engel, and failed to chart.
			Subsequent reissues have been released under his stage name. It has since received praise as one of Walker's best works.
		</p>
		<p>
			Scott 4 was the first Walker album to consist solely of self-penned songs—Scott, Scott 2 and Scott 3 had each featured translations of Jacques Brel songs, which were later compiled to form the album Scott Walker Sings Jacques Brel,
			which were later compiled to form the album Scott Walker Sings Jacques Brel, and the earlier albums had also featured some songs from other sources.
		</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut aliquet metus, ut scelerisque risus. Curabitur sed consequat quam. Morbi sodales imperdiet augue id condimentum. Ut ut consequat tellus. Fusce iaculis dolor eleifend neque blandit, in maximus felis ultrices. Quisque maximus volutpat ex, nec volutpat arcu. Sed placerat eros porttitor, efficitur neque id, dictum nisl. Nunc quis fermentum urna, lobortis lobortis nunc. Phasellus fringilla lacus et nisi dapibus faucibus. Phasellus arcu elit, faucibus in dui nec, finibus pulvinar eros. Morbi orci augue, tincidunt at congue sit amet, consectetur sed ligula.</p>
	</article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlbumPageVinyl from "@/components/AlbumPage/AlbumPageVinyl.vue";

@Component ({ 
    components: {
        AlbumPageVinyl
    }
})
export default class AlbumPageAbout extends Vue {
    mounted(): void {
        this.$emit('header', AlbumPageVinyl);
    }
}
</script>

<style lang="sass" scoped>

</style>