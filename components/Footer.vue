<script setup lang="ts">

const footer_categories = [
  {
    title: "Documentation",
    links: [
      {
        name: "Getting Started",
        url: "/docs/getting-started"
      },
      {
        name: "Javadocs",
        url: "https://javadoc.io/doc/com.github.seeseemelk/MockBukkit-v1.20/latest/index.html"
      }
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Discord",
        url: "https://discord.gg/3QwzKZs"
      },
      {
        name: "GitHub",
        url: "https://github.com/Mockbukkit/Mockbukkit"
      }
    ]
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        url: "/legal/privacy-policy"
      },
      {
        name: "Terms of Service",
        url: "/legal/terms-of-service"
      },
      {
        name: "Community Guidelines",
        url: "/legal/community-guidelines"
      }
    ]
  }
];

</script>

<template>
  <div class="max-w-screen-xl flex flex-col mx-auto divide-y divide-neutral-500">
    <div class="flex flex-row max-w-screen-xl">
      <FooterCategory v-for="category in footer_categories" :title="category.title"
                      :links="category.links"></FooterCategory>
    </div>
    <div class="flex flex-row py-8 justify-between">
      <img src="~/assets/logo.png" alt="Full Logo" class="w-1/6 h-auto">
      <div>
        <p class="text-neutral-400 text-sm">© 2023 The Mockbukkit Team. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>