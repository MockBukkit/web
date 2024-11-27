<template>
    <div>
        <CatchSection></CatchSection>
        <HighlightSection></HighlightSection>
    </div>
</template>

<script setup lang="ts">
const title = "MockBukkit | Comprehensive Unit Testing for Minecraft Plugins";
// The useSeoMeta function is used to set the SEO metadata for the page.
useSeoMeta({
    title: title,
    description:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    ogTitle: "Mockbukkit | Home",
    ogDescription:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    ogSiteName: "Mockbukkit",
    ogUrl: "https://mockbukkit.org",
    ogType: "website",
    ogImage: "https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png",
    twitterTitle: title,
    twitterDescription:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    twitterImage: "https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png",
    twitterCard: "summary",
});
</script>

<style>
body {
    background-color: #111111;
}
@media (prefers-color-scheme: light) {
    body {
        background-color: #dddddd;
    }
}
</style>
