const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/style/variable.scss";`,
      },
    },
  },
});
