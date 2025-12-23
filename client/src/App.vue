<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import CreateSessionModal from './components/CreateSessionModal.vue';
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
}
</style>
