<template>
    <v-app>
        <Transition name="fade">
            <router-view />
        </Transition>
        <SpinnerEl v-if="isLoading" />
    </v-app>
</template>

<script>
import SpinnerEl from "@/components/SpinnerEl.vue";
import bus from "@/utils/bus.js";
export default {
    data() {
        return {
            isLoading: false,
        };
    },
    components: {
        SpinnerEl,
    },
    methods: {
        startLoading() {
            this.isLoading = true;
        },
        endLoading() {
            this.isLoading = false;
        },
    },
    created() {
        bus.$on("start:loading", this.startLoading);
        bus.$on("end:loading", this.endLoading);
    },
    beforeDestroy() {
        bus.$off("start:loading", this.startLoading);
        bus.$off("end:loading", this.endLoading);
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
