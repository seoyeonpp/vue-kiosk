<template>
    <div>
        <div class="basket-footer">
            <div v-if="!isAdmin">
                <div class="basket">
                    <p v-for="(menu, index) in menus" :key="index">
                        <span>
                            {{ menu }}
                            <button @click="deleteMenu" class="delete-btn">삭제</button>
                        </span>
                    </p>
                </div>
                <button class="blue-btn">결제하기</button>
            </div>
            <div v-if="isAdmin">
                <button class="yellow-btn">메뉴추가</button>
                <button class="blue-btn">수정완료</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            menus: ["아메리카노", "자몽에이드", "카페라떼"],
        };
    },
    computed: {
        ...mapGetters({
            isAdmin: "getIsAdmin",
        }),
    },
    methods: {
        deleteMenu() {
            console.log("메뉴삭제");
        },
    },
};
</script>
