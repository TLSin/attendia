<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="content-container">
        <div class="return-container">
            <RouterLink to="/dashboard/teacher" class="link">← Go Back To Dashboard</RouterLink>
        </div>
        <div class="header">
            <h1>Download Report</h1>
            <p>Manage attendance by exporting attendance sheets or generating QR Code</p>
        </div>
        <div class="download-container">
            <div class="container-excel">
                <img src="" alt="Replace this with excel icon">
                <h1 class="title-card">Full Excel Report</h1>
                <p class="description">Export a formatted spreadsheet containing all students ID's, names, and timestamps for your records</p>
                <button class="dl-button">Download Excel</button>
            </div>
            <div class="container-qrcode">
                <img src="" alt="Replace this with excel icon">
                <h1 class="title-card">Summary QR Code</h1>
                <p class="description">Encodes the entire attendance list into a single QR Code. Scan to view the list of present and absent students instantly</p>
                <button class="dl-button">Generate QR Code</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content-container {
    width: 1280px;
}

.return-container {
    margin-top: 27px;
}

.header {
    margin-top: 5.125rem;
    text-align: center;
}

.header h1 {
    color: var(--l-primary-text);
    font-size: 26px;
    font-weight: 600;
}

.header p {
    color: var(--l-secondary-text);
    font-size: 1rem;
    margin-top: 15px;
}

.link {
    text-align: left;
    text-decoration: none;
    color: var(--l-primary-text);
}

.download-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 3.6rem;
}

.download-container .container-excel, .download-container .container-qrcode {
    display: flex;
    flex-direction: column;
    gap: 18px;
    background-color: var(--l-surface);
    border-radius: 10px;
    padding: 2.8rem;
    width: 100%;
}

.title-card {
    color: var(--l-primary-text);
    font-weight: 700;
}

.description {
    color: var(--l-secondary-text);
}

.container-qrcode {
    margin-left: 22px;
}

.dl-button {
    padding: 1rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
    border:none;
    font-weight: 500;
}
</style>