import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        drinkList: [],
        isAdmin: false,
        basketItem: [
            {
                menuSeq: 18,
                menuName: "따듯라",
                menuCost: 5000000,
                menuImg: "https://reflexion-bucket.s3.ap-northeast-2.amazonaws.com/public/study/kiosk/temp/cc5dde0a-6b4d-4ce6-bee5-fbe16b4a297bC9A4F364-E88F-484D-861C-7D50C3D9DB28.jpeg",
                menuOptionMap: {
                    1: [
                        {
                            optionGroupCode: 1,
                            optionCode: 2,
                            optionSeq: 2,
                            optionName: "차갑게",
                        },
                    ],
                },
            },
            {
                menuSeq: 20,
                menuName: "latte",
                menuCost: 50,
                menuImg: "https://reflexion-bucket.s3.ap-northeast-2.amazonaws.com/public/study/kiosk/temp/37e676c7-4e26-4fc7-8949-3ed98edce1eebikiniCity.jpg",
                menuOptionMap: {
                    1: [
                        {
                            optionGroupCode: 1,
                            optionCode: 1,
                            optionSeq: 1,
                            optionName: "뜨겁게",
                        },
                    ],
                    2: [
                        {
                            optionGroupCode: 2,
                            optionCode: 1,
                            optionSeq: 3,
                            optionName: "귀리우유",
                        },
                        {
                            optionGroupCode: 2,
                            optionCode: 2,
                            optionSeq: 4,
                            optionName: "락토프리",
                        },
                        {
                            optionGroupCode: 2,
                            optionCode: 3,
                            optionSeq: 5,
                            optionName: "저지방",
                        },
                    ],
                    3: [
                        {
                            optionGroupCode: 3,
                            optionCode: 1,
                            optionSeq: 6,
                            optionName: "샷추가없음",
                        },
                        {
                            optionGroupCode: 3,
                            optionCode: 2,
                            optionSeq: 7,
                            optionName: "1샷",
                        },
                        {
                            optionGroupCode: 3,
                            optionCode: 3,
                            optionSeq: 8,
                            optionName: "2샷",
                        },
                    ],
                },
            },
        ],
    },
    getters: {
        getDrinkList(state) {
            return state.drinkList;
        },
        getIsAdmin(state) {
            return state.isAdmin;
        },
        getBasketItem(state) {
            return state.basketItem;
        },
    },
    mutations,
    actions,
});
