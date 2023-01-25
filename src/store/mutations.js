export default {
    SET_ADMIN(state) {
        state.isAdmin = !state.isAdmin;
    },
    SET_DRINK_LIST(state, { item: { menuList } }) {
        state.drinkList = menuList;
    },
    DELETE_BASKET_ITEM(state, payload) {
        state.basketItem = state.basketItem.filter((item) => item.menuSeq !== payload);
    },
    ADD_BASKET_ITEM(state, item) {
        state.basketItem.push(item);
    },
};
