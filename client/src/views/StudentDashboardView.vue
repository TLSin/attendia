<script setup>
import LogoutIcon from '@/components/icons/LogoutIcon.vue';
import QRSmallIcon from '@/components/icons/QRSmallIcon.vue';
import QRComponent from '@/components/QRComponent.vue';
import ScanComponent from '@/components/ScanComponent.vue';
import HistoryComponent from '@/components/HistoryComponent.vue';
import { ref } from 'vue';

const active1 = ref(true);
const active2 = ref(false);
const active3 = ref(false);

const toggleActive = (mode) => {
    if (mode == 'QR') {
        active1.value = true;
        active2.value = false;
        active3.value = false;
    } else if (mode == 'Scan') {
        active1.value = false;
        active2.value = true;
        active3.value = false;
    } else {
        active1.value = false;
        active2.value = false;
        active3.value = true;
    }
}
</script>

<template>
    <div class="student-dashboard">
        <div class="header-student">
            <div class="container">
                <div class="avatar">
                </div>
                <div class="user-info">
                    <h1>John Doe</h1>
                    <h3 class="student-num">AB123456789</h3>
                    <h3 class="section">AB123456789</h3>
                </div>
            </div>
            <button>
                <LogoutIcon />Logout
            </button>
        </div>
        <div class="actions">
            <button class="action-button" @click="toggleActive('QR')">
                <QRSmallIcon class="qr-icon" />My QR Code
            </button>
            <button class="action-button" @click="toggleActive('Scan')">Scan Event</button>
            <button class="action-button" @click="toggleActive('History')">History</button>
        </div>
        <QRComponent v-if="active1" />
        <ScanComponent v-if="active2" />
        <HistoryComponent v-if="active3" />
    </div>
</template>

<style scope>
.student-dashboard {
    display: flex;
    flex-direction: column;
    width: 1280px;
    align-items: center;
    justify-content: center;
    top: 0;
}

.header-student {
    display: flex;
    width: 100%;
    background-color: var(--l-surface);
    padding: 1rem 28px;
    border-radius: 10px;
    justify-content: space-between;
    margin-top: 0.5rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 10%);
}

.container {
    display: flex;
    gap: 15px;
    align-items: center;
}

.avatar {
    height: 70px;
    width: 70px;
    background-color: black;
    border-radius: 50%;
}

.student-dashboard .header-student button {
    display: flex;
    background: none;
    outline: none;
    border: none;
    font-size: 1rem;
    color: #E7000B;
    align-items: center;
    gap: 5px;
}

.user-info h1 {
    font-size: 1.625rem;
    font-weight: 400;
    color: var(--l-primary-text);
}

.student-num {
    font-size: 1rem;
    color: var(--l-primary-text);
}

.section {
    font-size: 1rem;
    color: var(--l-secondary-text);
}

.actions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 13px;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.actions button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 1rem;
    font-size: 1rem;
    width: 33.33%;
    border: var(--l-borders);
    border-radius: 10px;
    background-color: var(--l-surface);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 10%);
    cursor: pointer;
}

.actions button:hover {
    background-color: var(--l-primary-button-bg);
    color: var(--d-primary-text);
}

.actions button:focus{
    background-color: var(--l-primary-button-bg);
    color: var(--d-primary-text);
}
</style>