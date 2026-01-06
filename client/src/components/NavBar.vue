<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import StatusPill from '@/components/icons/StatusPill.vue';
import { useUser } from '@/stores/user';
import { ref } from 'vue';

const router = useRouter();
const userStore = useUser();
const active = ref(userStore.setActive.active);

if (userStore.mode == 'teacher' || userStore.mode == 'student') {
    active.value = true;
} else {
    active.value = false;
}

const logOut = () => {
    router.push({
        name: 'home'
    })
    userStore.clearUser();
    active.value = false;
    console.log('logout');
}

</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <div class="logo">
                <RouterLink to="/" class="nav-links"><img src="@/assets/attendia-logo.png" alt="attendia-logo">
                </RouterLink>
            </div>
            <div class="links">
                <RouterLink to="/dashboard/teacher" class="nav-links">Dashboard</RouterLink>
                <RouterLink to="/about" class="nav-links">About</RouterLink>
                <StatusPill :mode="userStore.mode" v-if="active" />
                <h1 @click.self="logOut" v-if="active">Log out</h1>
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

.links {
    display: flex;
    font-size: 0.875rem;
    align-items: center;
    gap: 2rem;
}

.links h1 {
    font-size: 0.875rem;
    cursor: pointer;
}
</style>