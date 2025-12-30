<script setup>
import AdminIcon from '@/components/icons/AdminIcon.vue';
import StudentLoginIcon from '@/components/icons/StudentLoginIcon.vue';
import { ref } from 'vue';

defineProps({
    mode: {
        type: String,
        required: true,
    }
})

const value = ref(null)


</script>

<template>
    <div class="container">
        <div class="login-card">
            <div class="icon">
                <AdminIcon class="admin" v-if="mode === 'teacher'" />
                <StudentLoginIcon class="student" v-else />
            </div>
            <h1>{{ mode === 'teacher' ? 'Teacher Login' : 'Student Registeration' }}</h1>
            <p>Create you profile to generate your QR Code</p>
            <form class="form" v-if="mode === 'teacher'">
                <input type="text" placeholder="Username" class="textbox">
                <input type="password" placeholder="Password" class="textbox">
                <button type="submit" class="box">Submit</button>
            </form>
            <form class="form" v-else>
                 <input type="text" name="name" placeholder="John Doe" class="textbox">
                 <input type="text" name="section" placeholder="Section A" class="textbox">
                 <input type="text" name="student-number" placeholder="AB123456789" class="textbox">
                <button type="submit" class="box">Submit</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 90dvh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-card {
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 590px;
    background-color: var(--l-surface);
    border-radius: 15px;
    padding: 2rem;
    /* justify-content: center; */
    align-items: center;
    transition: all 0.5s ease;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    background-color: #ebf8ff;
    border-radius: 50%;
    overflow: hidden;
}

.login-card h1 {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--l-primary-text);
}

.login-card p {
    font-size: 1rem;
    color: var(--l-secondary-text);
}

.box {
    border: var(--l-borders);
    background-color: var(--l-primary-button-bg);
    --p-ripple-background: var(--p-blue-100);
    padding: 15px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 300;
    color: #ffffff;
}

.form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 2rem;
}

.textbox {
    background-color: var(--l-input-fields-bg);
    border: var(--l-borders);
    padding: 15px;
    border-radius: 10px;
    font-size: 1rem;
    color: var(--l-primary-text);
}

.textbox::placeholder {
    color: var(--l-secondary-text);
}
</style>