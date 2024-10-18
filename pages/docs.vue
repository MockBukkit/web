<script setup lang="ts">

</script>

<template>
    <div class="mx-auto flex max-w-screen-xl flex-col">
        <div class="my-[3rem] flex flex-row items-center justify-center">
            <h1 class="mr-2 text-3xl font-bold text-white">Our</h1>
            <h2 class="text-3xl font-bold text-green-500">Docs</h2>
        </div>

        <div class="grid gap-6 max-md:grid-rows-1 lg:grid-cols-2">
            <div class="mx-auto">
                <nav>
                    <ContentNavigation v-slot="{ navigation }">
                        <ul>
                            <li v-for="link of navigation" :key="link._path">
                                <NuxtLink :to="link._path" class="text-neutral-400 hover:text-neutral-200" >{{ link.title }}</NuxtLink>
                            </li>
                        </ul>
                    </ContentNavigation>
                </nav>
            </div>

            <div class="mx-auto">
                <ContentDoc class="text-white" />
            </div>

        </div>
    </div>
</template>

<style scoped>
ContentDoc {
    color: white;
}
</style>
