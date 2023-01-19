<template>
    <div>
        <form>
            <v-main>
                <v-container>
                    <div class="panel__layout">
                        <div class="panel__layout_inner">
                            <router-link to="/" class="back-btn"><v-btn color="primary" elevation="2">뒤로 가기</v-btn></router-link>
                            <h3 class="text-h3 font-weight-bold text-center">음료 선택</h3>
                            <v-row>
                                <v-col :cols="3">제공 온도</v-col>
                                <v-col :cols="9">
                                    <v-checkbox
                                        v-model="temperType"
                                        label="hot"
                                        color="red"
                                        value="0"
                                        hide-details
                                        class="ma-0 pa-0 d-inline-flex"
                                        ref="temper"
                                    />
                                    <v-checkbox
                                        v-model="temperType"
                                        label="ice"
                                        color="indigo"
                                        value="1"
                                        hide-details
                                        class="ma-0 ml-3 pa-0 d-inline-flex"
                                        ref="temper"
                                    />
                                </v-col>
                            </v-row>
                            <v-row class="mt-6">
                                <v-col :cols="3">우유 변경 가능</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="milkOpt" row class="ma-0" mandatory>
                                        <v-radio label="on" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="off" color="error" value="1" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col :cols="3">샷 추가 옵션</v-col>
                                <v-col :cols="9">
                                    <v-radio-group v-model="shotOpt" row class="ma-0" mandatory>
                                        <v-radio label="on" color="success" value="0" class="ma-0 mr-3 pa-0 d-inline-flex" />
                                        <v-radio label="off" color="error" value="1" class="ma-0 pa-0 d-inline-flex" />
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-container>
            </v-main>
            <v-footer padless>
                <v-btn block @click="submit"> 음료추가 </v-btn>
            </v-footer>
        </form>
    </div>
</template>

<script>
export default {};
</script>
