<template>
	<div class="album-page">
		<AlbumPageNavigationBar />
        <component :is="header" />
		<AlbumPageVinyl />
		<AlbumPageContent>
            <router-view :header.sync="header"/>
		</AlbumPageContent>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlbumPageNavigationBar from "@/components/AlbumPage/AlbumPageNavigationBar.vue";
import AlbumPageVinyl from "@/components/AlbumPage/AlbumPageVinyl.vue";
import AlbumPageContent from "@/components/AlbumPage/AlbumPageContent.vue";

@Component({
	components: {
		AlbumPageNavigationBar,
		AlbumPageVinyl,
		AlbumPageContent
	}
})
export default class AlbumPage extends Vue {
    header: Vue | undefined;
}
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
    
</style>