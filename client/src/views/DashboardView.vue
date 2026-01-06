<script setup>
import StatusCard from '@/components/StatusCard.vue';
import StudentIcon from '@/components/icons/StudentIcon.vue';
import ActiveSessionIcon from '@/components/icons/ActiveSessionIcon.vue';
import TotalSessionIcon from '@/components/icons/TotalSessionIcon.vue';
import AverageAttendanceIcon from '@/components/icons/AverageAttendanceIcon.vue';
import RecentSessionCard from '@/components/Recent-SessionCard.vue';
import CreateSessionModal from '@/components/CreateSessionModal.vue';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useUser } from '@/stores/user';

// const route = useRoute();
// const mode = route.query.mode;
const showModal = ref(false);
const userStore = useUser();
// const stop = ref(true);

const toggleModal = () => {
    showModal.value = !showModal.value;
}

console.log(userStore)
// console.log(mode);
</script>

<template>
    <div class="content">
        <div class="header">
            <h1>Attendance Tracker</h1>
            <p>Manage student attendance with QR Code integration</p>
        </div>

        <div class="status-container">
            <StatusCard title="Total Students" count="99" :icon="StudentIcon" />
            <StatusCard title="Active Sessions" count="99" :icon="ActiveSessionIcon" />
            <StatusCard title="Total Sessions" count="99" :icon="TotalSessionIcon" />
            <StatusCard title="Average Attendance" count="100%" :icon="AverageAttendanceIcon" />
        </div>
        <div class="action">
            <button class="create-session" @click="toggleModal">+ Create New Session</button>
            <RouterLink to="/download"><button class="download-report">Download Report</button></RouterLink>
        </div>
        <div class="session-history">
            <RecentSessionCard />
        </div>
    </div>

    <div class="modal">
        <CreateSessionModal v-if="showModal" @close="toggleModal" />
    </div>
</template>

<style scoped>
.content {
    width: 1280px;
    margin-top: 1.625rem;
    justify-content: center;
}

.content .header h1 {
    color: var(--l-primary-text);
    font-weight: 600;
    font-size: 1.625rem;
}

.content .header p {
    color: var(--l-secondary-text);
    font-size: 1rem;
}

.status-container {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
}

.action {
    margin-top: 2.0625rem;
}

.create-session {
    background-color: var(--l-primary-button-bg);
    border: none;
    padding: 13px 30px;
    border-radius: 10px;
    font-size: 1.0625rem;
    color: var(--d-primary-text);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 25%);
}

.create-session:hover {
    cursor: pointer;
    background-color: hsl(214, 35%, 50%);
}

.download-report {
    background-color: var(--l-surface);
    border: var(--l-borders);
    padding: 13px 30px;
    border-radius: 10px;
    font-size: 1.0625rem;
    color: var(--l-primary-text);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 25%);
    margin-left: 21px;
}

.download-report:hover {
    cursor: pointer;
    background-color: #f8f8f800;
}

.session-history {
    margin-top: 2.5rem;
}

.modal {
    position: absolute;
    /* top: 72px; */
    left: 0;
    justify-content: center;
    align-items: center;
}
</style>
