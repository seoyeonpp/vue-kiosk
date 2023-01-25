<template>
    <div>
        <button class="admin-btn" @click="toggleAdmin">
            <span v-if="!isAdmin">관리자</span>
            <span v-if="isAdmin">손님</span>
        </button>
        <v-row>
            <v-col v-for="(drink, index) in drinkList" :key="index" cols="4" style="position: relative">
                <button @click="deleteCard(drink.menuSeq)" v-if="isAdmin" class="delete-btn">삭제</button>
                <router-link :to="`/drink/${drink.menuSeq}`">
                    <v-card class="drink-card">
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
        deleteCard(menuSeq) {
            const res = this.$store.dispatch("DELETE_DRINK_LIST", menuSeq);
            res.then(() => {
                this.$store.dispatch("GET_DRINK_LIST");
            });
        },
    },
    mounted() {
        this.$store.dispatch("GET_DRINK_LIST");
    },
};
</script>

<style></style>
