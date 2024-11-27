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
        class="flex scale-95 flex-col rounded-lg bg-gradient-to-b from-green-500 to-green-400 pb-10 pt-3 shadow-xl transition duration-200 ease-in-out hover:scale-100 dark:from-green-800 dark:to-green-700"
    >
        <div class="mt-3 flex flex-col items-center justify-center">
            <font-awesome-icon class="mb-3 text-3xl dark:text-white" :icon="icon" />
            <h3 class="font-bold dark:text-white">{{ title }}</h3>
        </div>
        <p class="items-center p-4 text-center dark:text-white">{{ text }}</p>
    </div>
</template>
