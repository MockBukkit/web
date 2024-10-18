<template>
    <nav>
        <div class="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between pt-4 max-md:flex-col">
            <!--Logo-->
            <div class="flex max-md:mx-8 max-md:flex-row">
                <NuxtLink to="/" class="flex max-md:mx-0">
                    <img src="~/assets/mockbukkit_logo.png" alt="logo" class="flex h-auto w-1/6" />
                    <span
                        class="ml-2 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Mockbukkit</span>
                </NuxtLink>
                <!-- Mobile Hamburger -->
                <button data-collapse-toggle="navbar-default" type="button"
                        class="navbar-burger in1line-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-center text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false"
                        @click="toggleMenu"
                        v-if="isMobile && !isMenuOpen"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

            <!--Full size menu-->
            <div v-if="mounted && !isMobile" class="w-full md:block md:w-auto" id="navbar-default">
                <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 dark:border-gray-700">
                    <li>
                        <NuxtLink
                            to="/"
                            active-class="text-green-500"
                            class="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white md:hover:text-green-500"
                            aria-current-value="page"
                            title="Home"
                        >Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/team"
                            active-class="text-green-500"
                            class="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white md:hover:text-green-500"
                            aria-current-value="page"
                            title="Team"
                        >Team
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/docs"
                            active-class="text-green-500"
                            class="block rounded py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 dark:text-white md:hover:text-green-500"
                            aria-current-value="page"
                            title="Docs"
                        >Docs
                        </NuxtLink>
                    </li>
                    <li>
                        <a
                            href="https://github.com/MockBukkit/MockBukkit/blob/v1.21/CONTRIBUTING.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Contribute"
                            class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-green-500"
                        >Contribute</a
                        >
                    </li>
                    <li>
                        <a href="https://github.com/MockBukkit/MockBukkit" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <font-awesome-icon
                                icon="fa-brands fa-github"
                                class="text-2xl text-white md:hover:cursor-pointer md:hover:text-green-500"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/Xunsn6D8MB" target="_blank" rel="noopener noreferrer" title="Discord">
                            <font-awesome-icon
                                icon="fa-brands fa-discord"
                                class="text-2xl text-white md:hover:cursor-pointer md:hover:text-green-500"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <!--Mobile menu-->
            <div class="navbar-menu relative z-50" v-if="isMenuOpen">
                <div class="navbar-backdrop fixed inset-0 bg-[#111111] opacity-25"></div>
                <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#111111] overflow-y-auto">
                    <div class="flex items-center mb-8 ml-2">
                        <NuxtLink to="/" class="flex max-md:mx-0 ">
                            <img src="~/assets/mockbukkit_logo.png" alt="logo" class="flex h-auto w-1/6" />
                            <span
                                class="ml-2 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Mockbukkit</span>
                        </NuxtLink>
                        <button class="navbar-close" @click="toggleMenu">
                            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li class="mb-8">
                                <NuxtLink active-class="text-green-500"
                                          class="block ml-4 text-sm font-semibold text-white hover:bg-blue-50 rounded" to="/">Home
                                </NuxtLink>
                            </li>
                            <li class="mb-8">
                                <NuxtLink active-class="text-green-500"
                                          class="block ml-4 text-sm font-semibold text-white hover:bg-blue-50 rounded" to="/team">
                                    Team
                                </NuxtLink>
                            </li>
                            <li class="mb-8">
                                <NuxtLink active-class="text-green-500"
                                          class="block ml-4 text-sm font-semibold text-white hover:bg-blue-50 rounded" to="/docs">
                                    Docs
                                </NuxtLink>
                            </li>
                            <li class="mb-8">
                                <a class="block ml-4 text-sm font-semibold text-white hover:bg-blue-50 rounded"
                                   href="https://github.com/MockBukkit/MockBukkit/blob/v1.21/CONTRIBUTING.md"
                                   target="_blank"
                                   title="Contribute"
                                   rel="noopener noreferrer">
                                    Contribute
                                </a>
                            </li>
                            <li class="mb-8 flex ">
                                <a class="flex-1 ml-4" href="https://github.com/MockBukkit/MockBukkit" target="_blank" rel="noopener noreferrer" title="GitHub">
                                    <font-awesome-icon
                                        icon="fa-brands fa-github"
                                        class="text-2xl text-white md:hover:cursor-pointer md:hover:text-green-500"
                                    />
                                </a>
                            </li>
                            <li class="mb-8 flex ">
                                <a class="flex-1 ml-4" href="https://discord.gg/Xunsn6D8MB" target="_blank" rel="noopener noreferrer" title="Discord">
                                    <font-awesome-icon
                                        icon="fa-brands fa-discord"
                                        class="text-2xl text-white md:hover:cursor-pointer md:hover:text-green-500"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { width, height } = useWindowSize();

const isMobile = computed(() => {
    return width.value <= 766;
});

const mounted = ref(false)

onMounted(() => {
    mounted.value = true
})

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const route = useRoute();

watch(() => route.fullPath, () => {
        console.log("Route refresh");
        isMenuOpen.value = false;
    },
    {
        deep: true,
        immediate: true
    });
</script>
