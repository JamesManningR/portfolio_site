module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/abstracts/_mixins.scss";
          @import "@/scss/abstracts/_functions.scss";
          @import "@/scss/abstracts/_variables";
        `
      }
    }
  }
};
