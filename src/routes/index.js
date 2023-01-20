import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView";
import AddDrinkView from "@/views/AddDrinkView";
import AddBasketView from "@/views/AddBasketView";
import CheckPhone from "@/views/CheckPhone";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: MainView,
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
