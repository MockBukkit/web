// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt"
    ],

    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "favicon.ico",
                },
            ],
        },
    },

    css: ["@fortawesome/fontawesome-svg-core/styles.css"],

    build: {
        transpile: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/vue-fontawesome",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-solid-svg-icons",
        ],
    },

    compatibilityDate: "2024-07-27",
});
