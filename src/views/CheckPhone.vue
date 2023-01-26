<template>
    <form>
        <v-main>
            <v-container>
                <div class="panel__layout">
                    <div class="panel__layout_inner">
                        <router-link to="/" class="back-btn"><v-btn color="primary" elevation="2">뒤로 가기</v-btn></router-link>
                        <h3 class="text-h3 font-weight-bold text-center mb-13">휴대폰번호 입력</h3>
                        <v-text-field label="휴대폰번호를 입력하세요:)" v-model="phoneNum" maxlength="11"></v-text-field>
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
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-card v-if="isMember">
                    <v-card-text class="pt-6">
                        <v-card-title class="text-h5"> 휴대폰 번호를 <br />입력해주세요</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false"> 네 </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card>
                    <v-card-text class="pt-6">
                        <v-card-title class="text-h5"> 휴대폰 번호를 <br />입력해주세요</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <slot name="button"></slot> -->
                        <v-btn color="green darken-1" text @click="dialog = false"> 네 </v-btn>
                        <!-- <v-btn color="green darken-1" text @click="getIsDialog = false"> 아니요 </v-btn>
                    <v-btn color="green darken-1" text @click="getIsDialog = false"> 네 </v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
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
            dialog: false,
            isMember: Boolean,
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
        checkMember() {
            if (this.phoneNum === "") {
                this.dialog = true;
            } else {
                const phone = {
                    phoneNum: this.phoneNum,
                };
                this.$store
                    .dispatch("CHECK_MEMBER", phone)
                    .then(({ data }) => {
                        this.isMember = data.success;
                        data.success ? this.payFunc() : (this.dialog = true);
                    })
                    .catch((err) => console.log(err));
            }
        },
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
            this.$store.dispatch("ORDER_DRINK", orderList).then(() => {
                alert("결제가 완료되었습니다");
            });
        },
    },
};
</script>

<style></style>
