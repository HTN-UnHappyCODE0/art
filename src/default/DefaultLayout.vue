<script setup>
import Nav from "../components/TheHeader.vue";
import navfooter from "../components/TheFooter.vue";
</script>
<template>
  <Nav/>

  <router-view />
  <navfooter />
</template>
