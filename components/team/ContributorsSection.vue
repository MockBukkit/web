<script setup lang="ts">
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

let contributors: Contributor[];
let { data } = await useFetch<Contributor[]>("https://api.github.com/repos/Mockbukkit/Mockbukkit/contributors");

let filterOut = ["seeseemelk", "TheBusyBiscuit", "thelooter", "Insprill", "Thorinwasher", "4everTheOne", "renovate[bot]", "renovate-bot"];

if (data.value != null) {
    contributors = data.value;
    contributors.sort((a, b) => b.contributions - a.contributions);
    contributors = contributors.filter((contributor) => !filterOut.includes(contributor.login));
}
</script>

<template>
    <div class="bg-neutral-400 p-4 dark:bg-neutral-800">
        <h2 class="py-4 text-center text-3xl font-bold dark:text-white">Contributors</h2>
        <div class="mx-auto grid max-w-screen-xl gap-4 pb-8 pt-4 max-md:grid-cols-3 lg:grid-cols-8">
            <a v-for="contributor in contributors" :href="contributor.html_url" target="_blank" rel="noopener noreferrer">
                <img
                    :src="contributor.avatar_url"
                    class="mx-auto h-auto w-20 max-w-screen-xl rounded-full shadow-xl transition duration-200 ease-in-out hover:scale-105"
                    alt="avatar"
                />
            </a>
        </div>
    </div>
</template>
