<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    count: {
        type: [Number, String],
        required: true,
    },
    theme: {
        type: String,
    }
})

</script>

<template>
    <div class="status-card">
        <h4>{{ title }}</h4>
        <h1 :style="{ color: theme }">{{ count }}</h1>
    </div>
</template>

<style scoped>
.status-card {
    display: flex;
    flex-direction: column;
    background-color: var(--l-surface);
    padding: 25px;
    border-radius: 10px;
    width: 100%;
    border: var(--l-borders);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 10%);
}

h4 {
    font-size: 1rem;
}

h1 {
    font-size: 2rem;
}
</style>