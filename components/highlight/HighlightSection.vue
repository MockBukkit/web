<script setup lang="ts">

const cards = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Better Code Quality",
    text: "Unit testing improves code quality by identifying and fixing errors early in the development process. It ensures that each component functions correctly in isolation, contributing to a more robust and maintainable codebase."
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Faster Delivery",
    text: "Unit testing accelerates delivery by reducing the time spent on debugging and error correction. It provides rapid feedback, allowing developers to iterate and release features faster with confidence."
  },
  {
    icon: "fa-solid fa-user",
    title: "Less Manual Testing",
    text: "Unit testing decreases the reliance on manual testing by automating the validation of code components. This reduces the need for extensive manual testing, saving time and resources."
  },
  {
    icon: "fa-solid fa-clock-rotate-left",
    title: "Less Regressions",
    text: "Unit testing minimizes regression risks by constantly verifying existing functionality. When changes are made, tests ensure that previous features remain intact, preventing unexpected issues in the codebase."
  }
]

const loopCards = computed(() => {
  let localcards = []
  for (let i = 1; i < cards.length -1; i++) {
    localcards.push(cards[i])
  }
  return localcards
});

</script>

<template>
  <div class=" w-screen bg-neutral-800 my-8 py-8 flex flex-col">
    <div class="flex flex-row mx-auto">
      <h1 class="text-white font-semibold font text-xl">Make your development life </h1>
      <h1 class="text-green-500 ml-1 font-semibold text-xl">easier.</h1>
    </div>
    <div class="flex flex-row max-w-screen-xl my-8 mx-auto">
      <HighlightCard class="flex-1 mr-4" :icon="cards[0].icon" :title="cards[0].title"
                     :text="cards[0].text"></HighlightCard>
      <HighlightCard v-for="card in loopCards" class="flex-1 mx-4" :icon="card.icon" :title="card.title"
                     :text="card.text"></HighlightCard>
      <HighlightCard class="flex-1 ml-4" :icon="cards[cards.length -1].icon" :title="cards[cards.length -1].title"
                     :text="cards[cards.length -1].text"></HighlightCard>
    </div>
  </div>
</template>
