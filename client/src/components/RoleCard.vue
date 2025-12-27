<script setup>

</script>
<template>
    <div class="card">
        <slot name="role">

        </slot>
    </div>
</template>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 457px;
    background-color: var(--l-surface);
    padding: 34px;
    border-radius: 15px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 10%);
    position: relative;
    transition: all 0.5s ease;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    /* background-color: linear-gradient(0deg, transparent, transparent 30% rgb(122, 122, 122)); */
    background-color: hsl(160, 83%, 84%);
    transform: rotate(-45deg);
    transition: all 0.5s ease;
    opacity: 0;
}

.card:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 25%);
    cursor: pointer;
}

.card:hover::before{
    opacity: 1;
    transform: rotate(-45deg) translateY(100%);
}
</style>