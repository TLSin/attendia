<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StatusPill from '@/components/icons/StatusPill.vue'
</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <div class="logo">
                <RouterLink to="/" class="nav-links"><img src="@/assets/attendia-logo.png" alt="attendia-logo">
                </RouterLink>
            </div>
            <div class="links">
                <RouterLink to="/dashboard" class="nav-links">Dashboard</RouterLink>
                <RouterLink to="/about" class="nav-links">Reports</RouterLink>
                <RouterLink to="/about" class="nav-links">About</RouterLink>
                <StatusPill />
                <RouterLink to="/about" class="nav-links">Exit</RouterLink>
            </div>
        </div>
    </nav>
</template>


<style scoped>
.nav {
    background-color: var(--l-surface);
    height: 4.5rem;
    display: flex;
    justify-content: center;
    width: 100vw;
    top: 0;
    border-bottom: var(--l-borders);
    position: sticky;
    z-index: 10;
}

.nav-content {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
}

.nav img {
    height: 40px;
    margin: 0.5rem 0;
}

.nav-links {
    text-decoration: none;
    color: var(--l-primary-text);
}

.links{
    display: flex;
    font-size: 0.875rem;
    align-items: center;
    gap: 2rem;
}
</style>