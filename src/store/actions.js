import { deleteList, mainList, addMenu, drinkDetail, orderDrink, checkMember, checkPoint } from "@/api/index.js";

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
            return await orderDrink(drinkOpt);
        } catch (error) {
            console.log(error);
        }
    },
    async CHECK_MEMBER(context, phoneNum) {
        try {
            return await checkMember(phoneNum);
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_POINT(context, phoneNum) {
        try {
            return await checkPoint(phoneNum);
        } catch (error) {
            console.log(error);
        }
    },
};
