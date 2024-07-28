<script setup lang="ts">

</script>

<template>
  <div
      class="max-w-screen-xl w-screen flex flex-1 flex-row max-md:flex-col items-center justify-center max-md:w-screen mx-auto my-[5rem] max-md:my-[2rem] max-md:mt-4">
    <div class="max-w-screen-xl text-white w-screen max-md:flex max-md:flex-col">
      <h1 class="text-left max-md:text-center max-md:text-2xl text-5xl font-semibold py-2 max-md:py-0">Testing.</h1>
      <h1 class="text-left max-md:text-center max-md:text-2xl text-transparent bg-clip-text 1 text-5xl font-semibold py-2 bg-gradient-to-r from-green-500 to-green-300  ">
        Simplified.</h1>
      <p class="text-md font-medium py-2 pr-20 max-lg:pr-0 mx-lg:px-6 max-md:text-center max-lg:w-screen ">Mockbukkit
        makes unit testing of Paper Plugins easier by providing Mocks for common features</p>
      <div class="flex flex-row max-md:flex-col items-center justify-start max-md:justify-center mt-3">
        <button v-if="false"
                class="mr-4 max-md:mr-0 max-md:my-4 bg-green-500 rounded-md border-green-500 border-2 text-black font-normal px-5 py-1 hover:scale-105 transition ease-in-out duration-200">
          Downloads
        </button>
        <a href="https://mockbukkit.readthedocs.io/en/v1.20" target="_blank">
          <button v-if="false"
                  class="mx-4 rounded-md border-gray-600 border-2 px-5 py-1 hover:scale-105 transition ease-in-out duration-200">
            Documentation
          </button>
        </a>
        <a href="https://mockbukkit.readthedocs.io/en/v1.20" target="_blank">
          <button v-if="true"
                  class="rounded-md border-gray-600 border-2 px-5 py-1 hover:scale-105 transition ease-in-out duration-200">
            Documentation
          </button>
        </a>
      </div>
    </div>
    <div class="flex justify-end max-w-screen-xl w-screen ">
      <img src="~/assets/minecraft-trees.jpg" alt="test" class="rounded-2xl max-md:mx-auto max-md:mt-5 w-11/12  ">
    </div>
  </div>
</template>
