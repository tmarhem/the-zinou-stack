// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ["~/.yalc/my-vue-ui/dist/style.css", "~/node_modules/my-vue-ui/dist/style.css"],
  modules: ['my-module'],
  routeRules: {
    '/pokemon/**': {
        proxy: { to: "https://api-pokemon-fr.vercel.app/api/v1/pokemon/**", },
    }
  }
})
