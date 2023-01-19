import { deleteList, mainList } from "@/api/index.js";

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
    async DELETE_DRINK_LIST({ commit }, menuSeq) {
        try {
            const res = await deleteList(menuSeq);
            return res;
        } catch (error) {
            console.log(error);
        }
    },
};
