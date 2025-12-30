<template>
    <div class="qr-container">
        <div class="title">
            <h1>My QR Code</h1>
        </div>
        <div class="qr-code">
            <div class="qr">

            </div>
        </div>
        <p>Show this QR Code to mark your attendance</p>
        <div class="status">
            <span> Student ID: AB123456789</span>
        </div>
        <button>Download QR</button>
    </div>
</template>

<style scoped>
.qr-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: var(--l-surface);
    padding: 1rem 3rem;
    width: 100%;
    border-radius: 15px;
}

.qr-container h1 {
    font-size: 1rem;
    top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
}

.qr-code {
    display: flex;
    width: 100%;
    height: auto;
    background-color: var(--l-primary-background);
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
}

.qr {
    width: 340px;
    height: 340px;
    background-color: var(--l-surface);
    border-radius: 10px;
}

.qr-container p {
    font-size: 1rem;
    font-weight: 500;
    color: var(--l-primary-text);
    margin-top: 1rem;
}

.status {
    margin-top: 2rem;
}

.qr-container span {
    padding: 10px 15px;
    background-color: var(--l-present-status-bg);
    border-radius: 10px;
    color: var(--l-present-text);
}

.qr-container button {
    border: none;
    font-size: 1rem;
    color: var(--l-primary-button-text);
    background-color: var(--l-primary-button-bg);
    padding: 15px;
    border-radius: 5px;
    margin-top: 2rem;
}
</style>