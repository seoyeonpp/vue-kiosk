<template>
    <div>
        <button class="admin-btn" @click="toggleAdmin">
            <span v-if="!isAdmin">관리자</span>
            <span v-if="isAdmin">손님</span>
        </button>
        <v-row>
            <v-col v-for="(drink, index) in drinkList" :key="index" cols="4">
                <router-link to="/">
                    <v-card class="drink-card">
                        <img :src="drink.img" alt="" />
                        <div class="drink-info">
                            <h3>{{ drink.title }}</h3>
                            <p>{{ drink.price }}<span>원</span></p>
                            <p>{{ isAdmin }}</p>
                        </div>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            drinkList: "getDrinkList",
            isAdmin: "getIsAdmin",
        }),
    },
    methods: {
        toggleAdmin() {
            this.$store.commit("SET_ADMIN");
        },
    },
};
</script>

<style></style>
