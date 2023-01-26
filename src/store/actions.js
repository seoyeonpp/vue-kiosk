import { deleteList, mainList, addMenu, drinkDetail, orderDrink } from "@/api/index.js";

export default {
    async GET_DRINK_LIST(context) {
        try {
            const response = await mainList();
            context.commit("SET_DRINK_LIST", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async DELETE_DRINK_LIST(context, menuSeq) {
        try {
            const res = await deleteList(menuSeq);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    async INSERT_DRINK(context, drinkObj) {
        try {
            return await addMenu(drinkObj);
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_DRINK(context, menuSeq) {
        try {
            return await drinkDetail(menuSeq);
        } catch (error) {
            console.log(error);
        }
    },
    async ORDER_DRINK(context, drinkOpt) {
        try {
            const res = await orderDrink(drinkOpt);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
};
