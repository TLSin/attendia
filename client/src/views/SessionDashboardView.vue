<script setup>
import StatusCardSession from '@/components/StatusCardSession.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import DataTableCard from '@/components/DataTableCard.vue';
import DynamicModal from '@/components/DynamicModal.vue';
import CameraIcon from '@/components/icons/CameraIcon.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const sections = [
    { id: 1, section: '1000' },
    { id: 2, section: '1001' },
    { id: 3, section: '1002' },
    { id: 4, section: '1003' },
    { id: 5, section: '1004' },
    { id: 6, section: '1005' },
    { id: 7, section: '1006' },
    { id: 8, section: '1007' },
    { id: 9, section: '1008' },
    { id: 10, section: '1009' },
]

const modalType = ref('')
const title = ref('');
const description = ref('');
const showModal = ref(false);
const modalState = ref(false);

const toggleScanner = () => {
    showModal.value = !showModal.value;
    modalType.value = 'scan'
    if (modalType.value == 'scan') {
        modalState.value = true;
        title.value = 'Scan Students QR Code';
        description.value = 'Scan Students QR code to mark their attendance';
    }

}

const toggleEvent = () => {
    showModal.value = !showModal.value;
    modalType.value = 'event'
    if (modalType.value == 'event') {
        modalState.value = false;
        title.value = 'Scan QR Code';
        description.value = 'Students can scan this QR code to mark their attendance';
    }
}
</script>
<template>
    <div class="dashboard-container">
        <div class="return-container">
            <RouterLink to="/dashboard" class="link">← Go Back To Dashboard</RouterLink>
        </div>
        <div class="header-container">
            <div class="dashboard-info">
                <h1>Lab Lesson</h1>
                <h3>CISCO 01</h3>
                <p>12/16/2025 * 08:03 AM * Active</p>
            </div>
            <div class="action-btn">
                <button class="action" id="btn1" @click="toggleScanner">Scan Students</button>
                <button class="action" id="btn2" @click="toggleEvent">Show Event QR</button>
                <button class="action" id="btn3">End Session</button>
                <button class="action" id="btn4">Download Report</button>
            </div>
        </div>
        <div class="status-container">
            <StatusCardSession title="Present" count="99" theme="#0B8800" />
            <StatusCardSession class="card" title="Absent" count="99" theme="#E7000B" />
            <StatusCardSession class="card" title="Attendance Rate" count="100%" theme="#588BFC" />
        </div>
        <div class="filter-container">
            <div class="search-container">
                <input type="text" placeholder="Search: First Name, Last Name, Section...">
                <button type="submit">
                    <SearchIcon class="search-icon" />
                </button>
            </div>
            <div class="dynamic-filter">
                <button v-for="section in sections">{{ section.section }}</button>
            </div>
            <button>All Sections</button>
        </div>
        <div class="student-list">
            <DataTableCard />
        </div>
    </div>
    <DynamicModal class="dynamic-modal" v-if="showModal" @close-modal="toggleScanner">
        <template v-slot:data>
            <div class="d-content">
                <h1>{{ title }}</h1>
                <div class="qr-container" v-if="!modalState">
                    <div class="qr-code">
                        
                    </div>
                </div>
                <p>{{ description }}</p>
            </div>
            <div class="camera-container" v-if="modalState">
                <CameraIcon class="camera-icon" />
                <p>Click the button to start scannning</p>
                <button>Start Camera</button>
            </div>
            <div class="status" v-if="!modalState">
                <h3>Active</h3>
            </div>
        </template>
    </DynamicModal>
</template>

<style scoped>
.dashboard-container {
    width: 1280px;
    justify-content: center;
}

.return-container {
    margin-top: 27px;
}

.return-container .link {
    text-decoration: none;
    color: var(--l-primary-text);
}

.header-container {
    display: flex;
    justify-content: space-between;
}

.header-container .dashboard-info h1 {
    font-size: 1.25rem;
}

.header-container .dashboard-info h3 {
    font-size: 1rem;
}

.header-container .dashboard-info p {
    font-size: 1rem;
}

.action {
    border: none;
    color: var(--d-primary-text);
    padding: 12px;
    margin-left: 10px;
    font-size: 0.9rem;
    font-weight: 300;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 10%);
}

.action:hover {
    cursor: pointer;
}

#btn1 {
    background-color: #53AC74;
}

#btn2 {
    background-color: #BE63FF;
}

#btn3 {
    background-color: #E8525A;
}

#btn4 {
    background-color: #5A8CFB;
}

.status-container {
    display: flex;
    margin-top: 1.25rem;
}

.status-container .card {
    margin-left: 35px;
}

.filter-container {
    background-color: var(--l-surface);
    padding: 1rem;
    display: flex;
    border-radius: 10px;
    margin-top: 15px;
    border: var(--l-borders);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 10%);
}

.search-container {
    border: var(--l-borders);
    width: 50%;
    min-width: 300px;
    padding: 0 10px;
    display: flex;
    border-radius: 3px;
}

.search-container input {
    height: 100%;
    width: 100%;
    font-size: 0.9rem;
    border: none;
}

.dashboard-container .filter-container .search-container button {
    border: none;
    background-color: var(--l-surface);
    align-items: center;
    width: 50px;
}

input:focus {
    border: none;
    outline: none;
}

.dynamic-filter {
    display: flex;
    align-items: center;
    width: 50%;
    max-width: 50%;
    overflow-x: scroll;
    scrollbar-width: none;
}

.dashboard-container .filter-container .dynamic-filter button {
    background-color: var(--l-secondary-button);
    padding: 15px 30px;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
}

.dashboard-container .filter-container .dynamic-filter button:focus {
    outline: none;
}

.dashboard-container .filter-container .dynamic-filter button:hover {
    background-color: var(--l-primary-button-bg);
    color: var(--d-primary-text);
}

.filter-container button {
    border: var(--l-secondary-button);
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
    width: 10rem;
    font-size: 1rem;
    cursor: pointer;
}

.student-list {
    margin-top: 15px;
}

.dynamic-modal {
    /* position: absolute; */
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.modal-card h1 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--l-primary-text);
}

.modal-card p {
    font-size: 1rem;
    color: var(--l-secondary-text);
    text-align: center;
    margin-top: 25px;
}

.camera-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--l-primary-background);
    padding: 25px;
    border-radius: 5px;
    margin-top: 28px;
}

.camera-icon {
    height: 130px;
    width: 130px;
}

.camera-container p {
    color: var(--l-primary-text);
    font-size: 1rem;
}

.camera-container button {
    padding: 15px 20px;
    font-size: 1rem;
    color: var(--d-primary-text);
    background-color: var(--l-primary-button-bg);
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
}

.qr-container {
    display: flex;
    justify-content: center;
}

.qr-code {
    width: 300px;
    height: 300px;
    background-color: var(--l-primary-background);
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 1rem;
}

.status h3{
    text-align: center;
    color: var(--l-present-text);
}
</style>