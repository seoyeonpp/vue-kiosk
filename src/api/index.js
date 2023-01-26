import axios from "axios";

const config = {
    BASE_URL: "http://43.200.22.33:8080",
};

export const mainList = () => axios.get(`${config.BASE_URL}/api/menu/list`);
export const deleteList = (menuSeq) => axios.delete(`${config.BASE_URL}/manage/menu/${menuSeq}`);
export const addMenu = (drinkObj) => axios.post(`${config.BASE_URL}/manage/menu/`, drinkObj);
export const drinkDetail = (menuSeq) => axios.get(`${config.BASE_URL}/api/menu/${menuSeq}`);
export const orderDrink = (drinkOpt) => axios.post(`${config.BASE_URL}/api/order/`, drinkOpt);
export const checkMember = (phoneNum) => axios.post(`${config.BASE_URL}/api/order/check`, phoneNum);
