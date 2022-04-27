module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // not recommend to include app.vue
    // './app.vue',
    // this is in the official doc of tailwindcss, but it will cause error
    // './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
