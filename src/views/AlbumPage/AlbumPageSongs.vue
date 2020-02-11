<template>
    <ul>
        Hej
    </ul>
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
    created() {
        this.$emit('update:header', null);
    }
}
</script>

<style lang="sass" scoped>

</style>