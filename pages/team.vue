<script setup lang="ts">
import ContributorsSection from "~/components/team/ContributorsSection.vue";

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
];
</script>

<template>
    <div class="mx-auto flex max-w-screen-xl flex-col">
        <div class="my-[3rem] flex flex-row items-center justify-center">
            <h1 class="mr-2 text-3xl font-bold text-white">Our</h1>
            <h1 class="text-3xl font-bold text-green-500">Team</h1>
        </div>
        <div class="grid gap-6 max-md:grid-rows-5 lg:grid-cols-5">
            <TeamCard
                v-for="member in teamMembers"
                :name="member.name"
                :role="member.role"
                :image="member.image"
                :github="member.github"
            ></TeamCard>
        </div>
    </div>
    <ContributorsSection class="my-[3rem]" />
</template>

<style scoped></style>
