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
                        <button @click="deleteCard" v-if="isAdmin" class="delete-btn">삭제</button>
                        <div class="drink-img"><img :src="drink.menuImg" alt="" /></div>
                        <div class="drink-info">
                            <h3>{{ drink.menuName }}</h3>
                            <p>{{ drink.menuCost }}<span>원</span></p>
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
        deleteCard() {
            console.log("카드 삭제");
        },
    },
    created() {
        this.$store.dispatch("GET_DRINK_LIST");
    },
};
</script>

<style></style>
