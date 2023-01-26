<template>
    <v-row justify="center">
        <v-dialog persistent max-width="290">
            <v-card>
                <v-card-text class="pt-6">
                    <slot name="contents"></slot>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <slot name="button"></slot>
                    <!-- <v-btn color="green darken-1" text @click="getIsDialog = false"> 아니요 </v-btn>
                    <v-btn color="green darken-1" text @click="getIsDialog = false"> 네 </v-btn> -->
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    // props: ["toggle"]
};
</script>
