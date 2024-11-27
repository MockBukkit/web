<script setup lang="ts">
import ContributorsSection from "~/components/team/ContributorsSection.vue";

useSeoMeta({
    title: "Mockbukkit | Meet Our Team Members",
    description:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    ogTitle: "Mockbukkit | Meet Our Team Members",
    ogDescription:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    ogSiteName: "Mockbukkit",
    ogUrl: "https://mockbukkit.org",
    ogType: "website",
    ogImage: "https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png",
    twitterTitle: "Mockbukkit | Meet Our Team Members",
    twitterDescription:
        "MockBukkit is a framework for unit testing Bukkit plugins, offering versatile mock implementations for easy and effective automated plugin testing tools.",
    twitterImage: "https://raw.githubusercontent.com/MockBukkit/MockBukkit/v1.21/logo.png",
    twitterCard: "summary",
});

const teamMembers = [
    {
        name: "Seeseemelk",
        role: "Founder",
        image: "https://avatars.githubusercontent.com/u/2057687?v=4",
        github: "https://github.com/seeseemelk",
    },
    {
        name: "thelooter",
        role: "Lead Developer",
        image: "https://avatars.githubusercontent.com/u/24987877?v=4",
        github: "https://github.com/thelooter/",
    },
    {
        name: "Insprill",
        role: "Lead Developer",
        image: "https://avatars.githubusercontent.com/u/52843537?v=4",
        github: "https://github.com/Insprill",
    },
    {
        name: "Thorinwasher",
        role: "Maintainer",
        image: "https://avatars.githubusercontent.com/u/37477983?v=4",
        github: "https://github.com/Thorinwasher",
    },
    {
        name: "TheBusyBuscuit",
        role: "Maintainer",
        image: "https://avatars.githubusercontent.com/u/3967898?v=4",
        github: "https://github.com/thebusybiscuit",
    },
    {
        name: "4everTheOne",
        role: "Maintainer",
        image: "https://avatars.githubusercontent.com/u/5434488?v=4",
        github: "https://github.com/4everTheOne",
    },
];
</script>

<template>
    <div class="mx-auto flex max-w-screen-xl flex-col">
        <div class="my-[3rem] flex flex-row items-center justify-center">
            <h1 class="mr-2 text-3xl font-bold dark:text-white">Our</h1>
            <h2 class="text-3xl font-bold text-green-500">Team</h2>
        </div>
        <div class="grid gap-6 max-md:grid-rows-3 lg:grid-cols-3">
            <TeamCard v-for="member in teamMembers" :name="member.name" :role="member.role" :image="member.image" :github="member.github"></TeamCard>
        </div>
    </div>
    <ContributorsSection class="my-[3rem]" />
</template>

<style scoped></style>
