import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView";
import AddDrinkView from "@/views/AddDrinkView";
import AddBasketView from "@/views/AddBasketView";
import CheckPhone from "@/views/CheckPhone";
import { store } from "@/store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: MainView,
            beforeEnter: (to, from, next) => {
                store
                    .dispatch("GET_DRINK_LIST")
                    .then(() => next())
                    .catch((error) => console.log(error));
            },
        },
        {
            path: "/addDrink",
            component: AddDrinkView,
        },
        {
            path: "/drink/:id",
            component: AddBasketView,
        },
        {
            path: "/phone",
            component: CheckPhone,
        },
    ],
});
