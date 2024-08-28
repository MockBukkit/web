// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxtjs/robots", "@nuxtjs/sitemap", "nuxt-schema-org"],

    site: {
        url: "https://mockbukkit.org",
        name: "Mockbukkit"
    },

    schemaOrg: {
        identity: {
            type: 'Organization',
            name: 'Mockbukkit',
            url: 'https://mockbukkit.org',
            logo: 'https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png',
            sameAs: [
                "https://github.com/MockBukkit"
            ]
        }
    },

    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "favicon.ico",
                },
            ],
            title: "Mockbukkit",
            meta: [
                {name: "description", content:"Mockbukkit is a Unit Testing Framework for Minecraft Servers"}
            ]
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

    robots: {
        allow: [
            "/"
        ]
    },
    compatibilityDate: "2024-07-27",
});
