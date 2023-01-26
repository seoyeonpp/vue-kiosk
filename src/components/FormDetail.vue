<template>
    <form>
        <v-main>
            <v-container>
                <div class="panel__layout">
                    <div class="panel__layout_inner">
                        <router-link to="/" class="back-btn"><v-btn color="primary" elevation="2">뒤로 가기</v-btn></router-link>
                        <h3 class="text-h3 font-weight-bold text-center">
                            <slot name="page-title"></slot>
                        </h3>
                        <slot name="page-contents"></slot>
                    </div>
                </div>
            </v-container>
            <v-footer padless>
                <slot name="page-footer"></slot>
            </v-footer>
        </v-main>
    </form>
</template>

<script>
export default {};
</script>
