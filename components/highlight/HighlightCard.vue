<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="flex flex-col rounded-lg bg-gradient-to-b from-green-800 to-green-700 pb-10 pt-3 shadow-xl transition duration-200 ease-in-out hover:scale-105"
    >
        <div class="mt-3 flex flex-col items-center justify-center">
            <font-awesome-icon class="mb-3 text-3xl text-white" :icon="icon" />
            <h1 class="font-bold text-white">{{ title }}</h1>
        </div>
        <p class="items-center p-4 text-center text-white">{{ text }}</p>
    </div>
</template>
