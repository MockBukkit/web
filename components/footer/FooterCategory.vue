<script setup lang="ts">
import type { PropType } from "vue";

interface Link {
    name: string;
    url: string;
    title: string;
}

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    links: {
        type: Array as PropType<Link[]>,
        required: true,
    },
});
</script>

<template>
    <div class="mx-40 my-8 text-center max-md:mx-auto max-md:my-2">
        <h2 class="my-5 font-bold text-white">{{ title }}</h2>
        <ul>
            <li v-for="link in links" :key="link.name">
                <a :href="link.url" class="text-neutral-400 hover:text-neutral-200" :title="link.title">{{ link.name }}</a>
            </li>
        </ul>
    </div>
</template>
