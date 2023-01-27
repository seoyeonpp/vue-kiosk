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

        <!-- Dialog -->
        <v-row justify="center">
            <v-dialog v-model="phoneAlert" persistent max-width="290">
                <v-card>
                    <v-card-text class="pt-6">
                        <v-card-title class="text-h5"> 휴대폰 번호를 <br />입력해주세요</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="phoneAlert = false"> 네 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="newMemAlert" persistent max-width="290">
                <v-card>
                    <v-card-text class="pt-6">
                        <v-card-title class="text-h5">신규 회원입니다.<br />가입하시겠어요?</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="
                                newMemAlert = false;
                                cancelRegAlert = true;
                            "
                        >
                            아니요
                        </v-btn>
                        <v-btn color="green darken-1" text @click="payFunc"> 네 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="cancelRegAlert" persistent max-width="290">
                <v-card>
                    <v-card-text class="pt-6">
                        <v-card-title class="text-h5">회원 가입을 취소하셨습니다. <br />결제창으로 넘어갑니다. </v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="payFunc"> 네 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="doneOrderAlert" persistent max-width="290">
                <v-card>
                    <v-card-text class="pt-6">
                        <v-card-title class="text-h5">결제가 완료되었습니다</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <router-link to="/" color="green darken-1" text @click="doneOrderAlert = false"> 네 </router-link>
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
            phoneAlert: false,
            newMemAlert: false,
            cancelRegAlert: false,
            doneOrderAlert: false,
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
            if (this.phoneNum == "") {
                this.phoneAlert = true;
            } else {
                const phone = {
                    phoneNum: this.phoneNum,
                };
                this.$store
                    .dispatch("CHECK_MEMBER", phone)
                    .then(({ data }) => {
                        this.isMember = data.success;
                        data.success ? this.payFunc() : (this.newMemAlert = true);
                    })
                    .catch((err) => console.log(err));
            }
        },
        payFunc() {
            this.cancelRegAlert = false;
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
                this.doneOrderAlert = true;
                this.phoneAlert = false;
                this.newMemAlert = false;
                this.cancelRegAlert = false;
                setTimeout(() => {
                    this.$router.push("/");
                }, 5000);
            });
        },
    },
};
</script>

<style></style>
