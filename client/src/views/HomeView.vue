<script setup>
import RoleCard from '@/components/RoleCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const toggleLogIn = (mode) => {
    router.push({
        name: 'login',
        params: { mode },
    })
}
</script>

<template>
    <div class="card-container">
        <RoleCard role="teacher" class="card" @click="toggleLogIn('teacher')">
            <template v-slot:role>
                <div class="icon">
                </div>
                <div class="role">
                    <h1>Teacher/Organizer</h1>
                    <h3>Create events, manage attendance, scan student QR codes, and generate reports</h3>
                </div>
                <div class="description">
                    <ul>
                        <li>Create and manage events</li>
                        <li>Scan student QR codes</li>
                        <li>Generate attendance reports</li>
                        <li>Track attendance in real-time</li>
                    </ul>
                </div>
            </template>
        </RoleCard>
        <RoleCard role="student" class="card" @click="toggleLogIn('student')">
            <template v-slot:role>
                <div class="icon">
                </div>
                <div class="role">
                    <h1>Student</h1>
                    <h3>Generate your QR Code, event codes, and view your attendace history</h3>
                </div>
                <div class="description">
                    <ul>
                        <li>Generate your personal QR code</li>
                        <li>Scan event Qr codes</li>
                        <li>View attendance history</li>
                        <li>Download your QR code</li>
                    </ul>
                </div>
            </template>
        </RoleCard>
    </div>
</template>

<style scoped>
.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 25px;
    margin-top: 10rem;
}

.icon {
    background-color: var(--l-primary-background);
    width: 85px;
    height: 85px;
    border-radius: 50%;
}

.role {
    text-align: center;
}

.role h1 {
    margin-top: 25px;
    font-size: 17px;
}

.role h3 {
    margin-top: 10px;
    font-size: 1rem;
}

.description {
    width: 100%;
    margin-top: 20px;
}

.description ul {
    transform: translateX(-20px);
}

span {
    width: 16px;
    height: 16px;
    background-color: green;
}
</style>
