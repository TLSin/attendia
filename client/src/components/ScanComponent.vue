<script setup>
import CameraIcon from './icons/CameraIcon.vue';    
</script>
<template>
    <div class="scan-container">
        <h1>Scan Event QR Code</h1>
        <p>Scan the QR code displayed at the event to mark your attendance</p>
        <div class="scanner">
            <CameraIcon class="camera-icon"/>
            <p>Click the button below to start scanning</p>
            <button>Start Camera</button>
        </div>
        <hr>
        <h4>Instructions</h4>
        <ul>
            <li>Allow camera access when prompted</li>
            <li>Point your camera at the event QR code</li>
            <li>Hold staedy until the code is scanned</li>
            <li>Your attendance will be marked automatically</li>
        </ul>
    </div>
</template>
<style scoped>
.scan-container{
    display: flex;
    flex-direction: column;
    width: 1280px;
    background-color: var(--l-surface);
    padding: 2rem;
    border-radius: 15px;
}

h1{
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--l-primary-text);
}

p {
    color: var(--l-secondary-text);
    margin-bottom: 1rem;
}

.scan-container h4, li{
    color: var(--l-secondary-text);
}

.scanner{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
    width: 100%;
    background-color: var(--l-primary-background);
    border-radius: 10px;
    margin-bottom: 2rem;
    overflow: hidden;
}

.camera-icon{
    width: 100px;
    height: 100px;
    margin-top: 2rem;
}

.scanner button{
    padding: 1rem;
    border: none;
    background-color: var(--l-primary-button-bg);
    color: var(--d-primary-text);
    border-radius: 10px;
    margin-bottom: 1rem;
    font-size: 1rem;
    cursor: pointer;
}

hr{
    color: var(--l-secondary-text);
    margin-bottom: 1rem;
}


</style>