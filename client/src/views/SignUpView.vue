<script setup>
import AdminIcon from '@/components/icons/AdminIcon.vue';
import Authentication from '@/services/Authentication';
import { ref } from 'vue';
import { useRouter } from 'vue-router';



const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const passwordLengthError = ref('')

const router = useRouter();

const toggleSubmit = async () => {
    try {
        const fields = [
            { field: firstName, error: firstNameError, label: "First name" },
            { field: lastName, error: lastNameError, label: "Last name" },
            { field: email, error: emailError, label: "Email" },
            { field: password, error: passwordError, label: "Password" },
        ];

        let hasError = false;

        fields.forEach(f => f.error.value = '');

        for (const f of fields) {
            if (!f.field.value) {
                f.error.value = `The ${f.label} must not be empty`;
                hasError = true;
            }
        }

        if (!hasError) {
            if (password.value.length < 8) {
                passwordLengthError.value = "The password must be 8 or more characters long";
                return
            } else {
                const response = await Authentication.register({
                    firstname: firstName.value.trim(),
                    lastname: lastName.value.trim(),
                    email: email.value.trim(),
                    password: password.value.trim(),
                });
                
                passwordLengthError.value = '';

                if(response.data.success) {
                    router.push(response.data.redirect);
                }
            }
        }
    }
    catch (error) {
        console.log(error.response?.data)
    }
}
</script>

<template>
    <div class="card-container">
        <div class="sign-up-card">
            <div class="icon">
                <AdminIcon class="admin" />
            </div>
            <h1>Teacher Registration</h1>
            <p>Create you profile to generate your QR Code</p>
            <form class="form" @submit.prevent="toggleSubmit(mode)">
                <div class="name">
                    <div class="input-textbox errors">
                        <input type="text" placeholder="First Name" v-model="firstName">
                        <p class="error">{{ firstNameError }}</p>
                    </div>
                    <div class="input-textbox errors">
                        <input type="text" placeholder="Last Name" v-model="lastName">
                        <p class="error">{{ lastNameError }}</p>
                    </div>
                </div>
                <div class="input-textbox errors">
                    <input type="email" placeholder="Email" class="textbox" v-model="email">
                    <p class="error">{{ emailError }}</p>
                </div>
                <div class="input-textbox errors">
                    <input type="password" placeholder="Password" class="textbox" v-model="password">
                    <p class="error">{{ passwordError || passwordLengthError }}</p>
                </div>
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
    height: auto;
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
    gap: 20px;
    margin-top: 2rem;
}

.name {
    display: flex;
    width: 100%;
    overflow: hidden;
    gap: 10px;
}

.name .input-textbox input {
    background-color: var(--l-input-fields-bg);
    border: var(--l-borders);
    padding: 15px;
    border-radius: 10px;
    font-size: 1rem;
    color: var(--l-primary-text);
    width: 100%;
}

.input-textbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
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

.input-textbox .error {
    color: red;
    font-size: 0.7rem;
}

</style>