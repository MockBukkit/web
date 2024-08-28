<script setup lang="ts"></script>

<template>
    <div
        class="mx-auto my-[5rem] flex w-screen max-w-screen-xl flex-1 flex-row items-center justify-center max-md:my-[2rem] max-md:mt-4 max-md:w-screen max-md:flex-col"
    >
        <div class="w-screen max-w-screen-xl text-white max-md:flex max-md:flex-col">
            <h1 class="py-2 text-left text-5xl font-semibold max-md:py-0 max-md:text-center max-md:text-2xl">
                Testing.
            </h1>
            <h2
                class="1 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text py-2 text-left text-5xl font-semibold text-transparent max-md:text-center max-md:text-2xl"
            >
                Simplified.
            </h2>
            <p class="text-md mx-lg:px-6 py-2 pr-20 font-medium max-lg:w-screen max-lg:pr-0 max-md:text-center">
                Mockbukkit makes unit testing of Paper Plugins easier by providing Mocks for common features
            </p>
            <div class="mt-3 flex flex-row items-center justify-start max-md:flex-col max-md:justify-center">
                <button
                    v-if="false"
                    class="mr-4 rounded-md border-2 border-green-500 bg-green-500 px-5 py-1 font-normal text-black transition duration-200 ease-in-out hover:scale-105 max-md:my-4 max-md:mr-0"
                >
                    Downloads
                </button>
                <a href="https://mockbukkit.readthedocs.io/en/v1.21" target="_blank" rel="noopener noreferrer">
                    <button
                        v-if="false"
                        class="mx-4 rounded-md border-2 border-gray-600 px-5 py-1 transition duration-200 ease-in-out hover:scale-105"
                    >
                        Documentation
                    </button>
                </a>
                <a href="https://mockbukkit.readthedocs.io/en/v1.21" target="_blank" rel="noopener noreferrer">
                    <button
                        v-if="true"
                        class="rounded-md border-2 border-gray-600 px-5 py-1 transition duration-200 ease-in-out hover:scale-105"
                    >
                        Documentation
                    </button>
                </a>
            </div>
        </div>
        <div class="flex w-screen max-w-screen-xl justify-end">
            <img src="~/assets/minecraft-trees.jpg" alt="test" class="w-11/12 rounded-2xl max-md:mx-auto max-md:mt-5" />
        </div>
    </div>
</template>
