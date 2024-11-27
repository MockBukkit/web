<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Contributor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    contributions: number;
}

const contributors = ref<Contributor[]>([]);
const filterOut = ["seeseemelk", "TheBusyBiscuit", "thelooter", "Insprill", "Thorinwasher", "4everTheOne", "renovate[bot]", "renovate-bot"];

onMounted(async () => {
    let page = 1;
    let allContributors: Contributor[] = [];
    const perPage = 100;
    let morePagesAvailable = true;

    const uri = "https://api.github.com/repos/Mockbukkit/Mockbukkit/contributors";
    while (morePagesAvailable) {
        const { data } = await useFetch<Contributor[]>(`${uri}?per_page=${perPage}&page=${page}`);
        if (data.value != null && data.value.length > 0) {
            allContributors = allContributors.concat(data.value);
            page++;
        } else {
            morePagesAvailable = false;
        }
    }

    allContributors.sort((a, b) => b.contributions - a.contributions);
    contributors.value = allContributors.filter((contributor) => !filterOut.includes(contributor.login));
});
</script>

<template>
    <div class="bg-neutral-400 p-4 dark:bg-neutral-800">
        <h2 class="py-4 text-center text-3xl font-bold dark:text-white">Contributors</h2>
        <div class="mx-auto grid max-w-screen-xl gap-4 pb-8 pt-4 max-md:grid-cols-3 lg:grid-cols-8">
            <a v-for="contributor in contributors" :key="contributor.node_id" :href="contributor.html_url" target="_blank" rel="noopener noreferrer">
                <img
                    :src="contributor.avatar_url"
                    class="mx-auto h-auto w-20 max-w-screen-xl rounded-full shadow-xl transition duration-200 ease-in-out hover:scale-105"
                    alt="avatar"
                />
            </a>
        </div>
    </div>
</template>
