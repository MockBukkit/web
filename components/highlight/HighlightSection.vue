<script setup lang="ts">
const cards = [
    {
        icon: "fa-solid fa-shield-halved",
        title: "Better Code Quality",
        text: "Unit testing improves code quality by identifying and fixing errors early in the development process. It ensures that each component functions correctly in isolation, contributing to a more robust and maintainable codebase.",
    },
    {
        icon: "fa-solid fa-rocket",
        title: "Faster Delivery",
        text: "Unit testing accelerates delivery by reducing the time spent on debugging and error correction. It provides rapid feedback, allowing developers to iterate and release features faster with confidence.",
    },
    {
        icon: "fa-solid fa-user",
        title: "Less Manual Testing",
        text: "Unit testing decreases the reliance on manual testing by automating the validation of code components. This reduces the need for extensive manual testing, saving time and resources.",
    },
    {
        icon: "fa-solid fa-clock-rotate-left",
        title: "Less Regressions",
        text: "Unit testing minimizes regression risks by constantly verifying existing functionality. When changes are made, tests ensure that previous features remain intact, preventing unexpected issues in the codebase.",
    },
];

const loopCards = computed(() => {
    const localcards = [];
    for (let i = 1; i < cards.length - 1; i++) {
        localcards.push(cards[i]);
    }
    return localcards;
});
</script>

<template>
    <div class="my-8 flex w-full flex-col bg-neutral-400 py-8 dark:bg-neutral-800">
        <div class="mx-auto flex flex-row">
            <h3 class="font text-xl font-semibold dark:text-white">Make your development life</h3>
            <h3 class="ml-1 text-xl font-semibold text-green-700 dark:text-green-500">easier.</h3>
        </div>
        <div class="mx-auto my-8 flex max-w-screen-xl flex-row max-lg:flex-col">
            <HighlightCard class="my-2 mr-2 flex-1 max-lg:ml-2" :icon="cards[0].icon" :title="cards[0].title" :text="cards[0].text"></HighlightCard>
            <HighlightCard
                v-for="card in loopCards"
                :key="card.title"
                class="mx-2 my-2 flex-1"
                :icon="card.icon"
                :title="card.title"
                :text="card.text"
            ></HighlightCard>
            <HighlightCard
                class="my-2 ml-2 flex-1 max-lg:mr-2"
                :icon="cards[cards.length - 1].icon"
                :title="cards[cards.length - 1].title"
                :text="cards[cards.length - 1].text"
            ></HighlightCard>
        </div>
    </div>
</template>
