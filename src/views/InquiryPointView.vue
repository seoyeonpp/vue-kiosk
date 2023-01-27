<template>
    <div>
        <button class="point-btn" @click="inputAlert = true">포인트 조회하기</button>

        <!-- Dialog -->
        <v-row justify="center">
            <v-dialog v-model="inputAlert" max-width="350">
                <v-card class="pa-6">
                    <v-text-field label="전화번호를 입력해주세요" required v-model="phoneNum"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="inputAlert = !inputAlert"> 닫기 </v-btn>
                        <v-btn color="green darken-1" text @click="inquiryPoint"> 조회하기 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="failAlert" max-width="300">
                <v-card class="pa-1">
                    <v-card-text>
                        <v-card-title class="text-h8">회원이 아닙니다.</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="failAlert = !failAlert"> 닫기 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="successAlert" max-width="350">
                <v-card class="pa-2">
                    <v-card-text class="text-center">
                        <v-card-title class="text-h3">{{ this.point }} 점</v-card-title>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="successAlert = !successAlert"> 닫기 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputAlert: false,
            failAlert: false,
            successAlert: false,
            phoneNum: "",
            point: "",
        };
    },
    methods: {
        inquiryPoint() {
            const postData = {
                phoneNum: this.phoneNum,
            };
            this.$store.dispatch("FETCH_POINT", postData).then(({ data }) => {
                if (data.success) {
                    this.successAlert = true;
                    this.point = data.item;
                } else {
                    this.failAlert = true;
                }
                this.inputAlert = false;
                this.phoneNum = "";
            });
        },
    },
};
</script>
