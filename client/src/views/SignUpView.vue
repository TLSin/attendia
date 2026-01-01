<script setup>
import AdminIcon from '@/components/icons/AdminIcon.vue';
</script>

<template>
    <div class="card-container">
        <div class="sign-up-card">
            <div class="icon">
                <AdminIcon class="admin" />
            </div>
            <h1>Teacher Registeration</h1>
            <p>Create you profile to generate your QR Code</p>
            <form class="form" @submit.prevent="toggleSubmit(mode)">
                <div class="name">
                    <input type="text" placeholder="First Name">                    
                    <input type="text" placeholder="Last Name">                    
                </div>
                <input type="text" placeholder="Username" class="textbox" v-model="username">
                <input type="password" placeholder="Password" class="textbox" v-model="password">
                <button type="submit" class="box">Submit</button>
                <p>Already have a teacher/organizer account? <RouterLink to="/login/teacher" class="link">Click here.
                    </RouterLink>
                </p>
            </form>
        </div>
    </div>
</template>
<style scoped>
.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90dvh;
}

.sign-up-card {
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

.sign-up-card h1 {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--l-primary-text);
}

.sign-up-card p {
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
    gap: 30px;
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