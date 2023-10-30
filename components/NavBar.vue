<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <nav>
    <div class="max-w-screen-xl container mx-auto flex flex-wrap items-center justify-between mx-auto p-4 max-md:flex-col">
      <NuxtLink to="/" class="flex max-md:flex-col max-md:mx-auto">
        <img src="~/assets/mockbukkit_logo.png" alt="logo" class="w-1/6 h-auto max-md:mx-auto flex">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">Mockbukkit</span>
      </NuxtLink>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex text-center items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-green-500 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Download</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Docs</a>
          </li>
          <li>
            <a href="https://github.com/MockBukkit/MockBukkit/blob/v1.20/CONTRIBUTING.md" target="_blank" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contribute</a>
          </li>
          <li>
            <a href="https://github.com/MockBukkit/MockBukkit" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" class="text-white text-2xl md:hover:text-green-500 md:hover:cursor-pointer"/>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/s4cWYgsFaV" target="_blank">
              <font-awesome-icon icon="fa-brands fa-discord" class="text-white text-2xl md:hover:text-green-500 md:hover:cursor-pointer"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>