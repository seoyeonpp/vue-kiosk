<template>
    <div>
        <FormDetail>
            <template slot="page-title">{{ this.obj?.menuName }}</template>
            <template slot="page-contents">
                <v-row class="mt-13 text-center">
                    <v-img :src="this.obj.menuImg"></v-img>
                </v-row>
                <v-row class="mt-13">
                    <v-col :cols="3">가격</v-col>
                    <v-col :cols="9">
                        <p>{{ this.obj.menuCost }}원</p>
                    </v-col>
                </v-row>
                <v-row class="mt-5">
                    <v-col :cols="3">제공 온도</v-col>
                    <v-col :cols="9">
                        <v-radio-group v-model="temperType" row class="ma-0" mandatory>
                            <v-radio label="HOT" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                            <v-radio label="ICE" color="error" value="1" class="ma-0 pa-0 d-inline-flex" />
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-row class="mt-6" v-if="this.obj.menuOptionMap?.[2]">
                    <v-col :cols="3">우유 변경</v-col>
                    <v-col :cols="9">
                        <v-radio-group v-model="milkOpt" row class="ma-0" mandatory>
                            <v-radio label="귀리우유" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                            <v-radio label="락토프리" color="error" value="1" class="ma-0 mr-3 pa-0 d-inline-flex" />
                            <v-radio label="저지방" color="error" value="2" class="ma-0 pa-0 d-inline-flex" />
                        </v-radio-group>
                    </v-col>
                </v-row>
                <v-row v-if="this.obj?.menuOptionMap?.[3]">
                    <v-col :cols="3">샷 추가</v-col>
                    <v-col :cols="9">
                        <v-radio-group v-model="shotOpt" row class="ma-0" mandatory>
                            <v-radio label="샷추가 없음" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                            <v-radio label="1샷" color="error" value="1" class="ma-0 mr-3 pa-0 d-inline-flex" />
                            <v-radio label="2샷" color="error" value="2" class="ma-0 pa-0 d-inline-flex" />
                        </v-radio-group>
                    </v-col>
                </v-row>
            </template>
            <template slot="page-footer">
                <v-btn block @click="submit"> 메뉴추가 </v-btn>
            </template>
        </FormDetail>

        <!-- <form>
            <v-main>
                <v-container>
                    <div class="panel__layout">
                        <div class="panel__layout_inner">
                            <router-link to="/" class="back-btn"><v-btn color="primary" elevation="2">뒤로 가기</v-btn></router-link>
                            <h3 class="text-h3 font-weight-bold text-center">{{ this.obj.menuName }}</h3>
                            <v-row class="mt-13 text-center">
                                <v-img :src="this.obj.menuImg"></v-img>
                            </v-row>
                            <v-row class="mt-13">
                                <v-col :cols="3">가격</v-col>
                                <v-col :cols="9">
                                    <p>{{ this.obj.menuCost }}원</p>
                                </v-col>
                            </v-row>
                            <v-row class="mt-5">
                                <v-col :cols="3">제공 온도</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="temperType" row class="ma-0" mandatory>
                                        <v-radio label="HOT" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="ICE" color="error" value="1" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row class="mt-6" v-if="this.obj.menuOptionMap?.[2]">
                                <v-col :cols="3">우유 변경</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="milkOpt" row class="ma-0" mandatory>
                                        <v-radio label="귀리우유" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="락토프리" color="error" value="1" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="저지방" color="error" value="2" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row v-if="this.obj?.menuOptionMap?.[3]">
                                <v-col :cols="3">샷 추가</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="shotOpt" row class="ma-0" mandatory>
                                        <v-radio label="샷추가 없음" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="1샷" color="error" value="1" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="2샷" color="error" value="2" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
            </v-main>
            <v-footer padless>
                <v-btn block @click="submit"> 메뉴추가 </v-btn>
            </v-footer>
        </form> -->
    </div>
</template>

<script>
import FormDetail from "@/components/FormDetail.vue";
import bus from "@/utils/bus.js";
export default {
    components: { FormDetail },
    data: () => ({
        obj: {},
        imgUrl: "",
        file: null,
        milkOpt: null,
        shotOpt: null,
        temperType: null,
    }),
    methods: {
        submit() {
            const menu = {
                menuSeq: this.obj.menuSeq,
                menuName: this.obj.menuName,
                menuCost: this.obj.menuCost,
                orderMilk: this.milkOpt,
                orderShot: this.shotOpt,
                orderTemp: this.temperType,
            };

            this.$store.commit("ADD_BASKET_ITEM", menu);
            this.$router.push("/");
        },
    },
    created() {
        bus.$emit("start:loading");
        const menuSeq = this.$route.params.id;
        const response = this.$store.dispatch("FETCH_DRINK", menuSeq);
        response
            .then(({ data: { item } }) => {
                this.obj = item;
            })
            .then(() => {
                bus.$emit("end:loading");
            });
    },
};
</script>
