<script setup>
import { useRouter } from 'vue-router';
import Creation from '@/services/Creation';
import { ref } from 'vue';

const emit = defineEmits(['close']);

const toggleClose = () => {
    emit('close');
}

const router = useRouter();

const eventName = ref('');
const subject = ref('');
const eventType = ref('');
const date = ref('');
const time = ref('');

const toggleSubmit = async () => {
    try {
        const response = await Creation.event({
            event_name: eventName.value.trim(),
            subject: subject.value.trim(),
            event_type: eventType.value.trim(),
            date: date.value.trim(),
            time: time.value.trim(),
        })
        console.log(response)
        router.push({
            name: 'session'
        })
    } catch (error) {
        console.log(error.response?.error);
    }
}

</script>

<template>
    <div class="backdrop" @click.self="toggleClose">
        <div class="modal">
            <form @submit.prevent.self="toggleSubmit">
                <h2>Create New Session</h2>
                <div class="input-group">
                    <label for="">Event Name</label>
                    <input type="text" placeholder="Lab Lesson" v-model="eventName">
                    {{ eventName }}
                </div>
                <div class="input-group">
                    <label for="">Subject/Course</label>
                    <input type="text" v-model="subject">
                    {{ subject }}
                </div>
                <div class="input-group">
                    <label for="">Event Type</label>
                    <input type="text" v-model="eventType">
                    {{ eventType }}
                </div>
                <div class="input-group">
                    <label for="">Date</label>
                    <input type="date" v-model="date">
                    {{ date }}
                </div>
                <div class="input-group">
                    <label for="">Start Time</label>
                    <input type="time" v-model="time">
                    {{ time }}
                </div>
                <div class="action-buttons">
                    <button class="cancel" @click="toggleClose">Cancel</button>
                    <button type="submit" class="create">Create Session</button>
                </div>

            </form>
        </div>
    </div>
</template>
<style scoped>
.modal {
    position: absolute;
    background-color: var(--l-surface);
    width: 500px;
    height: auto;
    padding: 27px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
}

.modal form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.modal form h2 {
    color: var(--l-primary-text);
}

.modal form label {
    color: var(--l-primary-text);
    font-size: 1rem;
    font-weight: 200;
}

.modal form input {
    padding: 8px 10px;
    font-size: 1rem;
}

.modal form .action-buttons {
    display: flex;
    flex-direction: row;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.cancel {
    background-color: var(--l-secondary-button-bg);
    font-size: 1rem;
    padding: 9px 17px;
    width: 100%;
    color: var(--l-primary-text);
    border: var(--l-borders);
    border-radius: 10px;
}

.create {
    margin-left: 10px;
    font-size: 1rem;
    padding: 9px 17px;
    width: 100%;
    color: var(--d-primary-text);
    background-color: var(--l-primary-button-bg);
    border-radius: 10px;
    border: none;
}

.backdrop {
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    width: 100%;
    height: 100%;
    z-index: 2
}
</style>