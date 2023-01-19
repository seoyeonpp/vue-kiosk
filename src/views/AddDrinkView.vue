<template>
    <div>
        <form>
            <v-main>
                <v-container>
                    <div class="panel__layout">
                        <div class="panel__layout_inner">
                            <router-link to="/" class="back-btn"><v-btn color="primary" elevation="2">뒤로 가기</v-btn></router-link>
                            <h3 class="text-h3 font-weight-bold text-center">음료 등록</h3>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        label="Name"
                                        required
                                        @input="$v.name.$touch()"
                                        @blur="$v.name.$touch()"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="cost"
                                        :error-messages="costErrors"
                                        label="Cost"
                                        required
                                        @input="$v.cost.$touch()"
                                        @blur="$v.cost.$touch()"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <div class="img_attach_layout">
                                        <v-img :src="this.imgUrl"></v-img>
                                        <v-file-input
                                            label="File input"
                                            hide-input
                                            filled
                                            prepend-icon="mdi-camera"
                                            @change="changeImg"
                                        ></v-file-input>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col :cols="3">제공 온도</v-col>
                                <v-col :cols="9">
                                    <v-checkbox
                                        v-model="temperType"
                                        label="hot"
                                        color="red"
                                        value="0"
                                        hide-details
                                        class="ma-0 pa-0 d-inline-flex"
                                        ref="temper"
                                    />
                                    <v-checkbox
                                        v-model="temperType"
                                        label="ice"
                                        color="indigo"
                                        value="1"
                                        hide-details
                                        class="ma-0 ml-3 pa-0 d-inline-flex"
                                        ref="temper"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="mt-6">
                                <v-col :cols="3">우유 변경 가능</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="milkOpt" row class="ma-0" mandatory>
                                        <v-radio label="on" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="off" color="error" value="1" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col :cols="3">샷 추가 옵션</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="shotOpt" row class="ma-0" mandatory>
                                        <v-radio label="on" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="off" color="error" value="1" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
            </v-main>
            <v-footer padless>
                <v-btn block @click="submit"> 음료추가 </v-btn>
            </v-footer>
        </form>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    validations: {
        name: { required },
        cost: { required },
    },
    data: () => ({
        name: "",
        cost: "",
        imgUrl: "",
        file: null,
        milkOpt: null,
        shotOpt: null,
        temperType: [],
    }),
    methods: {
        submit() {
            const form = new FormData();
            form.append("menuImg", this.file);
            form.append("menuName", this.name);
            form.append("menuCost", this.cost);
            form.append("temp", this.temperType.length > 1 ? `${this.temperType[0]},${this.temperType[1]}` : `${this.temperType[0]}`);
            form.append("milk", this.milkOpt);
            form.append("shot", this.shotOpt);

            const response = this.$store.dispatch("INSERT_DRINK", form);
            response.then((res) => {
                if (res === undefined) return;
                this.$router.push("/");
            });
            this.$v.$touch();
        },

        changeImg(file) {
            this.imgUrl = URL.createObjectURL(file);
            this.file = file;
        },
    },
    computed: {
        setImgUrl() {
            return this.imgUrl === "" && "@/assets/images/temp.jpg";
        },
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push("Name is required.");
            return errors;
        },
        costErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push("Cost is required.");
            return errors;
        },
    },
};
</script>
