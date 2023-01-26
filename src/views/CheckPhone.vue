<template>
    <form>
        <v-main>
            <v-container>
                <div class="panel__layout phone-layout">
                    <div class="panel__layout_inner">
                        <router-link to="/" class="back-btn"><v-btn color="primary" elevation="2">뒤로 가기</v-btn></router-link>
                        <h3 class="text-h3 font-weight-bold text-center">휴대폰번호 입력</h3>
                        <v-text-field label="휴대폰번호를 입력하세요:)" v-model="phoneNum"></v-text-field>
                    </div>
                </div>
            </v-container>
        </v-main>
        <v-footer padless>
            <div class="v-btn-group">
                <v-btn block @click="payFunc"> 적립하지 않을래요 </v-btn>
                <v-btn block class="blue-btn" @click="checkMember"> 포인트 적립하기 </v-btn>
            </div>
        </v-footer>
    </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
    mixins: [validationMixin],
    validations: {
        phoneNum: { minLength: minLength(11) },
    },
    data() {
        return {
            phoneNum: "",
        };
    },
    computed: {
        ...mapGetters(["getBasketItem"]),
    },
    methods: {
        // submit() {
        //     this.$v.$touch();
        // },
        // clear() {
        //     this.$v.$reset();
        //     this.phoneNum = "";
        // },
        checkMember() {},
        payFunc() {
            const orderList = [];
            this.getBasketItem.map((item) => {
                const temp = {
                    menuSeq: item.menuSeq,
                    orderMilk: item.orderMilk,
                    orderShot: item.orderShot,
                    orderTemp: item.orderTemp,
                    phoneNum: this.phoneNum || "",
                };
                orderList.push(temp);
            });
            this.$store.dispatch("ORDER_DRINK", orderList);
        },
    },
    // created() {
    //     this.$store.dispatch("ORDER_DRINK", this.$store.state.basketItem);
    // },
};
</script>

<style></style>
