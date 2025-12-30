<script setup>
import StatusPill from './icons/StatusPill.vue';
</script>

<template>
    <div class="history-container">
        <h1>Attendance History</h1>
        <div class="recent">
            <div class="session-info">
                <h4>Lab Lesson</h4>
                <h4>CISCO 02</h4>
                <p>12/15/2025 &nbsp; <span class="indicator">&nbsp;</span> &nbsp; 07:39 AM</p>
            </div>
            <div class="status">
                <StatusPill />
            </div>
        </div>
    </div>
</template>
<style scoped>
.history-container {
    width: 1280px;
    background-color: var(--l-surface);
    padding: 2rem;
    border-radius: 15px;
}

h1{
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

p {
    display: flex;
    align-items: center;
}

.recent {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f9fafb;
    border-radius: 10px;
    border: var(--l-borders);
}

.session-info{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.indicator {
    background-color: grey;
    width: 5px;
    height: 5px;
    border-radius: 100%;
}
</style>