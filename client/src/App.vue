<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  margin-top: 4.5rem;
}

header{
  position: fixed;
  top: 0;
  z-index: 10;
}
</style>
