import { deleteList, mainList, addMenu } from "@/api/index.js";

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
            const response = await addMenu(drinkObj);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
};
