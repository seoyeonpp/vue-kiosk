<template>
    <div>
        <v-main>
            <v-container>
                <DrinkList />
                <InquiryPointView />
            </v-container>
        </v-main>
        <v-footer padless>
            <BasketFooter />
        </v-footer>
    </div>
</template>

<script>
import BasketFooter from "@/components/BasketFooter.vue";
import DrinkList from "@/components/DrinkList.vue";
import InquiryPointView from "@/views/InquiryPointView.vue";

export default {
    components: {
        BasketFooter,
        DrinkList,
        InquiryPointView,
    },
};
</script>
