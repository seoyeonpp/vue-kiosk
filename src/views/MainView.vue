<template>
    <div>
        <v-main>
            <v-container>
                <DrinkList />
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
export default {
    data() {
        return {

        }
    },
    components: {
        BasketFooter,
        DrinkList
    }
}
</script>

<style>

</style>