<script setup>
import RoleCard from '@/components/RoleCard.vue';
import StudentLoginIcon from '@/components/icons/StudentLoginIcon.vue';
import AdminIcon from '@/components/icons/AdminIcon.vue';
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
                <div class="icon teacher">
                    <AdminIcon />
                </div>
                <div class="role">
                    <h1>Teacher/Organizer</h1>
                    <h3>Create events, manage attendance, scan student QR codes, and generate reports</h3>
                </div>
                <div class="description">
                    <ul>
                        <li><span class="indicator teacher">&nbsp;</span>Create and manage events</li>
                        <li><span class="indicator teacher">&nbsp;</span>Scan student QR codes</li>
                        <li><span class="indicator teacher">&nbsp;</span>Generate attendance reports</li>
                        <li><span class="indicator teacher">&nbsp;</span>Track attendance in real-time</li>
                    </ul>
                </div>
            </template>
        </RoleCard>
        <RoleCard role="student" class="card" @click="toggleLogIn('student')">
            <template v-slot:role>
                <div class="icon student">
                    <StudentLoginIcon />
                </div>
                <div class="role">
                    <h1>Student</h1>
                    <h3>Generate your QR Code, event codes, and view your attendace history</h3>
                </div>
                <div class="description">
                    <ul>
                        <li><span class="indicator student">&nbsp;</span>Generate your personal QR code</li>
                        <li><span class="indicator student">&nbsp;</span>Scan event Qr codes</li>
                        <li><span class="indicator student">&nbsp;</span>View attendance history</li>
                        <li><span class="indicator student">&nbsp;</span>Download your QR code</li>
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 85px;
    border-radius: 50%;
}

.icon.teacher{
    background-color: rgba(0, 132, 255, 0.096);
}

.icon.student{
    background-color: rgba(172, 255, 146, 0.267);
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

.description ul li {
    display: flex;
    align-items: center;
    gap: 10px;
}

.indicator.teacher {
    background-color: rgb(0, 132, 255);
    width: 5px;
    height: 5px;
    border-radius: 100%;
}

.indicator.student {
    background-color: rgb(172, 255, 146);
    width: 5px;
    height: 5px;
    border-radius: 100%;
}
</style>
