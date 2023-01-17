<template>
    <v-app id="inspire">
        <v-main>
            <v-container>
                <v-row>
                    <!-- TODO: v-for문으로 커피 컴포넌트 -->
                <v-col
                    v-for="n in 24"
                    :key="n"
                    cols="4"
                >
                    <v-card height="200"></v-card>
                </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer padless>
            <MainFooterBtn/>
        </v-footer>
    </v-app>
    
</template>

<script>
import MainFooterBtn from "@/components/MainFooterBtn.vue";

export default {
    data() {
        return{

        }
    },
    components:{
        MainFooterBtn
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
</style>
