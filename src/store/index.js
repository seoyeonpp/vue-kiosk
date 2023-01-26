import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        drinkList: [],
        isAdmin: false,
        basketItem: [],
        // dialog: false,
    },
    getters: {
        getDrinkList(state) {
            return state.drinkList;
        },
        getIsAdmin(state) {
            return state.isAdmin;
        },
        // getIsDialog(state) {
        //     return state.dialog;
        // },
        getBasketItem(state) {
            return state.basketItem;
        },
    },
    mutations,
    actions,
});
