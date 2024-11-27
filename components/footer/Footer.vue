<script setup lang="ts">
const footer_categories = [
    {
        title: "Documentation",
        links: [
            {
                name: "Documentation",
                url: "https://docs.mockbukkit.org",
                title: "Documentation",
            },
            {
                name: "Javadocs",
                url: "https://javadoc.io/doc/com.github.seeseemelk/MockBukkit-v1.21/latest/index.html",
                title: "Javadocs",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Discord",
                url: "https://discord.gg/3QwzKZs",
                title: "Discord",
            },
            {
                name: "GitHub",
                url: "https://github.com/Mockbukkit/Mockbukkit",
                title: "GitHub",
            },
        ],
    },
    {
        title: "Legal",
        links: [
            {
                name: "Privacy Policy",
                url: "/privacy",
                title: "Privacy Policy",
            },
            {
                name: "Cookie Policy",
                url: "/cookies",
                title: "Cookie Policy",
            },
            {
                name: "Legal Notice",
                url: "/legal",
                title: "Legal Notice",
            },
        ],
    },
];
</script>

<template>
    <div class="mx-auto flex max-w-screen-xl flex-col divide-y divide-neutral-500">
        <div class="flex max-w-screen-xl flex-row justify-between max-md:flex-col">
            <FooterCategory v-for="category in footer_categories" :key="category.title" :title="category.title" :links="category.links"></FooterCategory>
        </div>
        <div class="flex flex-row justify-between py-8 max-md:flex-col max-md:py-4">
            <img src="../../assets/logo.png" alt="Full Logo" class="h-auto w-1/6 max-xl:ml-4 max-md:mx-auto max-md:my-4 max-md:w-2/3" />
            <div>
                <p class="text-sm text-neutral-800 max-xl:mr-4 max-md:text-center dark:text-neutral-400">© 2024 The MockBukkit Team.</p>
            </div>
        </div>
    </div>
</template>
