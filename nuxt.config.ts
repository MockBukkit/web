// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxtjs/robots", "@nuxtjs/sitemap", "nuxt-schema-org", "nuxt-posthog", "@nuxt/content"],

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
            htmlAttrs: {
                lang: "en"
            },
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "favicon.ico",
                },
                {
                    rel: "canonical",
                    href: "https://mockbukkit.org"
                },
            ],
            title: "MockBukkit | Comprehensive Unit Testing for Minecraft Plugins",
            meta: [
                {
                    name: "description",
                    content: "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools."
                }
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
