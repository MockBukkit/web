<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-gradient-to-b from-green-800 to-green-700 rounded-lg pt-3 pb-10 hover:scale-105 transition ease-in-out duration-200 shadow-xl flex flex-col">
    <div class="flex flex-col items-center justify-center mt-3">
      <font-awesome-icon class="text-white text-3xl mb-3" :icon="icon"/>
      <h1 class="text-white font-bold">{{title}}</h1>
    </div>
    <p class="text-white p-4 items-center text-center">{{text}}</p>
  </div>
</template>

<style scoped>

</style>