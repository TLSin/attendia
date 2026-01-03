<script setup>
import AdminIcon from '@/components/icons/AdminIcon.vue';
import StudentLoginIcon from '@/components/icons/StudentLoginIcon.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    mode: {
        type: String,
        required: true,
    }
})

const username = ref('');
const firstName = ref('');
const lastName = ref('');
const password = ref('');
const section = ref('');
const studentNum = ref('');

const toggleSubmit = (mode) => {
    if (mode == 'teacher') {
        console.log("you've click me");
    } else {

    }
}

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
            <form class="form" v-if="mode === 'teacher'" @submit.prevent="toggleSubmit(mode)">
                <input type="text" placeholder="Username" class="textbox" v-model="username">
                <input type="password" placeholder="Password" class="textbox" v-model="password">
                <button type="submit" class="box">Submit</button>
                <p>Doesn't have a teacher/organizer account yet? <RouterLink to="/signup" class="link">Click here.
                    </RouterLink>
                </p>
            </form>
            <form class="form" v-else @submit.prevent="toggleSubmit(mode)">
                <div class="name">
                    <input type="text" name="name" placeholder="First Name" class="textbox" v-model="firstName">
                    <input type="text" name="name" placeholder="Last Name" class="textbox" v-model="lastName">
                </div>
                <input type="text" name="section" placeholder="Section" class="textbox" v-model="section">
                <input type="text" name="student-number" placeholder="Student Number" class="textbox" v-model="studentNum">
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
    height: auto;
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
    gap: 20px;
    margin-top: 2rem;
}

.name{
    display: flex;
    width: 100%;
    overflow: hidden;
    gap: 10px;
}

.name input{
    background-color: var(--l-input-fields-bg);
    border: var(--l-borders);
    padding: 15px;
    border-radius: 10px;
    font-size: 1rem;
    color: var(--l-primary-text);
    width: 50%;
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

.form p,
.link {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--l-secondary-text);
}
</style>