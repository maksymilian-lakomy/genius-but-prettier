import { Vue } from 'vue-property-decorator';

export default Vue.extend({
    methods: {
        pushView(viewName: string): void {
            if (this.$router.currentRoute.name === viewName)
                return;
            this.$router.push({name: viewName});
        }
    }
})