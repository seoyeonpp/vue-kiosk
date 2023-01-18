export default {
    SET_ADMIN(state) {
        state.isAdmin = !state.isAdmin;
    },
    SET_DRINK_LIST(state, { item: { menuList } }) {
        state.drinkList = menuList;
    },
};
