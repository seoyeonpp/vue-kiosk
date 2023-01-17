const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: ["vuetify"],
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/scss/base/_base.scss";
                `,
            },
        },
    },
});
