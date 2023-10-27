// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'public/favicon.ico'
                }
        ]
        }
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ]

})
