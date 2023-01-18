<template>
    <div>
        <form>
            <v-main>
                <v-container>
                    <div class="panel__layout">
                        <div class="panel__layout_inner">
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
                                        <v-img :src="require(`@/assets/images/${imgUrl}`)"></v-img>
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
                                <v-col>제공 온도</v-col>
                                <v-col>
                                    <v-checkbox v-model="ck1" label="red" color="red" value="red" hide-details />
                                </v-col>
                                <v-col>
                                    <v-checkbox v-model="ck1" label="indigo" color="indigo" value="indigo" hide-details />
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
import { required, maxLength } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    validations: {
        name: { required, maxLength: maxLength(10) },
        cost: { required },
        checkbox: {
            checked(val) {
                return val;
            },
        },
    },
    data: () => ({
        name: "",
        cost: "",
        checkbox: false,
        imgUrl: "temp.jpg",
    }),
    methods: {
        submit() {
            this.$v.$touch();
        },
        changeImg(file) {
            console.log(file);
            this.imgUrl = file.name;
        },
    },
    computed: {
        checkboxErrors() {
            const errors = [];
            if (!this.$v.checkbox.$dirty) return errors;
            !this.$v.checkbox.checked && errors.push("You must agree to continue!");
            return errors;
        },
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.maxLength && errors.push("Name must be at most 10 characters long");
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
