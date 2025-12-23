<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    count: {
        type: [String, Number],
        required: true
    },
    icon: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="status-card">
        <div class="grid-1">
            <h1 class="title">{{ title }}</h1>
            <h2 class="count">{{ count }}</h2>
        </div>
        <div class="grid-2">
            <component :is="icon" />
        </div>
    </div>
</template>

<style scoped>
.status-card {
    background-color: var(--l-surface);
    display: grid;
    grid-template-columns: 1fr auto;
    width: 18.875rem;
    height: 7.4375rem;
    padding: 1.5625rem 1.625rem;
    border-radius: 10px;
    box-shadow: 0px 4px 11px 0 rgba(0, 0, 0, 10%);
}

.status-card .title {
    color: var(--l-primary-text);
    font-size: 1rem;
}

.status-card .count {
    color: var(--l-primary-text);
    font-size: 2rem;
}

.grid-2 {
    display: flex;
    align-items: center;
}
</style>