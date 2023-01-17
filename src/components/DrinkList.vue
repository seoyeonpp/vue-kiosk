<template>
    <v-row>
        <!-- TODO: v-for문으로 커피 컴포넌트 -->
        <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
        >
            <v-card height="200"></v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>