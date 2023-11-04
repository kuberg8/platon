module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/platon/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
}
