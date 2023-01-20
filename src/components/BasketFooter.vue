<template>
    <div class="basket-footer">
        <div v-if="!isAdmin">
            <div class="basket">
                <h4>장바구니</h4>
                <p v-for="(item, index) in basketItem" :key="index">
                    <span>
                        {{ item.menuName }}
                        <button @click="deleteMenu(item.menuSeq)" class="delete-btn">삭제</button>
                    </span>
                </p>
                <hr />
                <p>
                    <strong class="sum">총 {{ sumCost }} 원</strong>
                </p>
            </div>
            <router-link to="/phone" class="blue-btn">결제하기</router-link>
        </div>
        <div v-if="isAdmin">
            <router-link to="/addDrink" class="yellow-btn">메뉴추가</router-link>
            <button class="blue-btn">수정완료</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            sumCost: 0,
        };
    },
    computed: {
        ...mapGetters({
            drinkList: "getDrinkList",
            isAdmin: "getIsAdmin",
            basketItem: "getBasketItem",
        }),
    },
    methods: {
        deleteMenu(menuSeq) {
            this.$store.commit("DELETE_BASKET_ITEM", menuSeq);
            this.funcSumCost(this.basketItem, "-");
        },
        funcSumCost(basketItem, operator) {
            operator === "+" ? basketItem.map((item) => (this.sumCost += item.menuCost)) : basketItem.map((item) => (this.sumCost -= item.menuCost));
            if (basketItem.length == 0) this.sumCost = 0;
        },
    },
    created() {
        this.funcSumCost(this.basketItem, "+");
        // console.log(this.$store.state.basketItem);
    },
    updated() {
        this.$nextTick(() => {});
    },
};
</script>
