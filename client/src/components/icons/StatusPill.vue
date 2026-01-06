<script setup>
defineProps({
    // title: {
    //     type: String,
    // },
    mode: {
        type: String,
    }
})


</script>

<template>
    <div class="status-pill">
        <p>{{ mode }}</p>
    </div>
</template>

<style scoped>
.status-pill {
    background-color: var(--teacher-bg);
    border-radius: 2.5em;
    height: 2rem;
    padding: 0.3rem 0.8rem;
    align-items: center;
}

.status-pill p {
    color: var(--teacher-text);
    text-transform: capitalize;
}
</style>