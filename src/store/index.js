import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        drinkList: [
            {
                img: "https://sitem.ssgcdn.com/88/71/03/item/1000291037188_i1_1200.jpg",
                price: 0,
                title: "카페라떼",
            },
            {
                img: "https://www.waffleuniv.com/data/item/1511177682/7J6Q66q97JeQ7J2065Oc.jpg",
                price: 1,
                title: "자몽에이드",
            },
            {
                img: "https://dev-paris.shoplic.store/wp-content/uploads/201008-%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%E1%84%82%E1%85%A9%E1%86%A8%E1%84%8E%E1%85%A1%E1%84%85%E1%85%A1%E1%84%84%E1%85%A6ice-1280x1280.jpg",
                price: 2,
                title: "녹차라떼",
            },
            {
                img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
                price: 3,
                title: "아메리카노",
            },
        ],
        isAdmin: false,
    },
    getters: {
        getDrinkList(state) {
            return state.drinkList;
        },
        getIsAdmin(state) {
            return state.isAdmin;
        },
    },
    mutations,
    actions,
});
