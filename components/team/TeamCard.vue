<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="mx-auto my-2 rounded bg-white bg-gradient-to-b from-green-500 to-green-400 p-2 text-center shadow-xl transition duration-200 ease-in-out hover:scale-105 max-md:mx-6 dark:from-green-800 dark:to-green-700"
    >
        <img class="mx-auto mt-4 w-1/3 rounded-full shadow-xl max-md:w-1/4" :src="image" alt="pic" />
        <h2 class="mt-2 text-lg font-bold dark:text-white">{{ name }}</h2>
        <h3 class="text-neutral-900">{{ role }}</h3>
        <a :href="github" target="_blank" rel="noopener noreferrer"><font-awesome-icon class="mt-5 text-3xl dark:text-white" icon="fa-brands fa-github" /></a>
    </div>
</template>

<style scoped></style>
