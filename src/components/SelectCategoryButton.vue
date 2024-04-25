<template>
  <router-link
  :to="{ name: 'Category', params: { categoryName: href } }"
    class="text-gray-900 text-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm py-3 px-10 w-full me-2 my-2"
    aria-current="page"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  href: String,
});
</script>
