<script setup lang="ts">
// import posthog from 'posthog-js/dist/module.full.no-external'
// posthog.init(process.env.POSTHOG_API_KEY ?? "", { api_host: process.env.POSTHOG_API_HOST, person_profiles: 'always' })
</script>

<template>
    <NavBar></NavBar>
    <slot />
    <Footer></Footer>
</template>
