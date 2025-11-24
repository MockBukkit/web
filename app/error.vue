<template>
    <NuxtLayout name="default">
        <div class="container mx-auto my-8 max-w-screen-lg text-center dark:text-white">
            <p class="mb-8 text-8xl text-neutral-600">404</p>
            <div class="text-4xl">You've Arrived Here on Error, boss</div>
            <button class="mx-4 my-4 rounded-md border-2 border-gray-600 px-5 py-1 transition duration-200 ease-in-out hover:scale-105" @click="goBackHome">
                Back
            </button>
        </div>
    </NuxtLayout>
</template>

<script setup>
const goBackHome = () => {
    useRouter().push("/");
};
</script>

<style scoped>
.button {
    padding: 4px 6px;
    margin: 10px 0px;
    color: white;
}
</style>
