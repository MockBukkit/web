<script setup lang="ts">

interface Contributor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  contributions: number
}

let contributors: Contributor[];
let {data} = await useFetch<Contributor[]>("https://api.github.com/repos/Mockbukkit/Mockbukkit/contributors");

let filterOut = [
  "seeseemelk",
  "TheBusyBiscuit",
  "thelooter",
  "Insprill",
  "Thorinwasher",
  "renovate[bot]",
  "renovate-bot"
]

if (data.value != null) {
  contributors = data.value;
  contributors.sort((a, b) => b.contributions - a.contributions)
  contributors = contributors.filter(contributor => !filterOut.includes(contributor.login));
}

</script>

<template>
  <div class="bg-neutral-800 p-4">
    <h1 class="text-white font-bold text-3xl text-center py-4">Contributors</h1>
    <div class="grid max-md:grid-cols-3 lg:grid-cols-8 gap-4 max-w-screen-xl mx-auto pt-4 pb-8 ">
      <a v-for="contributor in contributors" :href="contributor.html_url" target="_blank">
        <img :src="contributor.avatar_url"
             class="mx-auto max-w-screen-xl rounded-full w-20 h-auto hover:scale-105 transition ease-in-out duration-200 shadow-xl"
             alt="avatar">
      </a>
    </div>
  </div>

</template>
