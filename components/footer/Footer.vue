<script setup lang="ts">

const footer_categories = [
  {
    title: "Documentation",
    links: [
      {
        name: "Documentation",
        url: "https://mockbukkit.readthedocs.io/en/v1.20/?badge=v1.20"
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
    <div class="flex flex-row max-md:flex-col max-w-screen-xl">
      <FooterCategory v-for="category in footer_categories" :title="category.title"
                      :links="category.links"></FooterCategory>
    </div>
    <div class="flex flex-row max-md:flex-col py-8 max-md:py-4 justify-between">
      <img src="../../assets/logo.png" alt="Full Logo" class="w-1/6 h-auto max-md:my-4 max-md:w-2/3 max-md:mx-auto">
      <div>
        <p class="text-neutral-400 max-md:text-center text-sm">© 2023-2024 The Mockbukkit Team. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
