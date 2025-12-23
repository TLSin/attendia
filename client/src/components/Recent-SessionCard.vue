<script setup>
    import QRIcon from './icons/QRIcon.vue';
</script>
<template>
    <div class="session-card">
        <h2 class="header">Recent Sessions</h2>
        <QRIcon />
        <div class="message">
            <p>No sessions yet <br>
                Create your first session to get started!
            </p>
        </div>
    </div>
</template>

<style scoped>
    .header {
        font-size: 1rem;
    }

    .session-card {
        background-color: var(--l-surface);
        width: 100%;
        border-radius: 10px;
        padding: 25px;
    }

    .message {
        text-align: center;
    }
</style>