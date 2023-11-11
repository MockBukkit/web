<script setup lang="ts">

import ContributorsSection from "~/components/team/ContributorsSection.vue";

const teamMembers = [
  {
    name: "Seeseemelk",
    role: "Lead Developer",
    image: "https://avatars.githubusercontent.com/u/2057687?v=4",
    github: "https://github.com/seeseemelk",
  },
  {
    name: "TheBusyBuscuit",
    role: "Maintainer",
    image: "https://avatars.githubusercontent.com/u/3967898?v=4",
    github: "https://github.com/thebusybiscuit"
  },
  {
    name: "thelooter",
    role: "Maintainer",
    image: "https://avatars.githubusercontent.com/u/24987877?v=4",
    github: "https://github.com/thelooter/",
  },
  {
    name: "Insprill",
    role: "Maintainer",
    image: "https://avatars.githubusercontent.com/u/52843537?v=4",
    github: "https://github.com/Insprill",
  },
  {
    name: "Thorinwasher",
    role: "Maintainer",
    image: "https://avatars.githubusercontent.com/u/37477983?v=4",
    github: "https://github.com/Thorinwasher",
  }
];

</script>

<template>
  <div class="flex flex-col mx-auto max-w-screen-xl">
    <div class="flex flex-row items-center justify-center my-[3rem]">
      <h1 class="text-white font-bold text-3xl mr-2">Our</h1>
      <h1 class="text-green-500 font-bold text-3xl">Team</h1>
    </div>
    <div class="grid grid-cols-5 gap-6" >
      <TeamCard v-for="member in teamMembers" :name="member.name" :role="member.role" :image="member.image" :github="member.github"></TeamCard>
    </div>
  </div>
  <ContributorsSection class="my-[3rem]" />
</template>

<style scoped>

</style>
