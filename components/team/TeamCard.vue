<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  name: String,
  role: String,
  image: String,
  github: String
});

</script>

<template>
  <div class="rounded mx-auto p-2 my-2 bg-white text-center bg-gradient-to-b from-green-800 to-green-700 hover:scale-105 transition ease-in-out duration-200 shadow-xl">
    <img class="rounded-full w-1/2 mx-auto mt-4 shadow-xl" :src="image" alt="pic">
    <h1 class="text-white font-bold text-lg mt-2 ">{{name}}</h1>
    <h1 class="text-neutral-900">{{role}}</h1>
    <a :href="github" target="_blank"><font-awesome-icon class="text-3xl text-white mt-5" icon="fa-brands fa-github"/></a>
  </div>

</template>

<style scoped>

</style>
