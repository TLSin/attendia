<script setup>
const emit = defineEmits(['close-modal']);

const toggleScanner = () => {
    emit('close-modal');
}
</script>

<template>
    <div class="backdrop" @click.self="toggleScanner">
        <div class="modal-card">
            <slot name="data">   
            </slot>
        </div>
    </div>
</template>

<style scoped>
.backdrop {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 10%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
}

.modal-card {
    background-color: var(--l-surface);
    width: 43.75rem;
    padding: 25px;
    border-radius: 10px;
}
</style>