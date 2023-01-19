import axios from "axios";

const config = {
    BASE_URL: "http://192.168.0.196:8080",
};

export const mainList = () => axios.get(`${config.BASE_URL}/api/menu/list`);
export const deleteList = (menuSeq) => axios.delete(`${config.BASE_URL}/manage/menu/${menuSeq}`);
