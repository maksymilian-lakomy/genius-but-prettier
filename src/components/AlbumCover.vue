<template>
    <div class = "album-cover">
        <AlbumCoverDescription/>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import AlbumCoverDescription from "@/components/AlbumCoverDescription.vue";

@Component({
    components: {
        AlbumCoverDescription
    }
})

export default class AlbumCover extends Vue {

};
</script>

<style lang="sass" scoped>
.album-cover
    display: flex
    flex-direction: column
    justify-content: flex-end
    height: inherit
    background-image: url(https://www.1001albums.co.uk/wp-content/uploads/2016/06/Scott-Walker-Scott-4.png)
    position: relative
    z-index: 0

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

    AlbumCoverDescription
        z-index: 100
</style>