<template>
    <div class="grid justify-items-center mt-[50px]">
        <img src="../assets/Logologin.png" alt="">

        <div
            class="shadow-2xl rounded-5px w-[400px] pt-[40px] px-[30px] pb-[20px] my-[50px] border-t-2 border-primary1">
            <button class="text-[16px] text-linkActive" @click="linkHome">Home</button>
            <span class="text-desc"> / Login</span>

            <h3 class="text-[20px] font-bold text-heading mt-[30px]">Login</h3>
            <p class="text-desc mt-[10px] mb-[30px]">Input your username and password.</p>

            <FormInputVue label="Username" placeholder="e.g. alfianchii" inputId="username" :inputType="'text'">
            </FormInputVue>
            <FormInputVue label="Password" placeholder="e.g. 4kuBu7uhM3dk1t" inputId="password"
                        :isPassword="true" :inputType="'password'"></FormInputVue>

            <button class="rounded-5px 
            bg-primary1 text-white text-[14px] font-bold 
            w-full 
            py-[10px]
            mt-[30px]">
                Login
            </button>
        </div>
        <button class="text-desc text-[14px] mb-[50px]" @click="linkRegister">
            Don’t have an account? <span class="text-linkActive">Create one!</span>
        </button>
        <p class="text-desc text-[14px] mb-[50px]">© 2024 Lidia. All rights reserved.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormInputVue from '../components/FormInput.vue';
export default defineComponent({
    name: 'login',
    components: {
        FormInputVue
    },
    methods: {
        linkHome() {
            this.$router.push({ name: 'Home' })
        },
        linkRegister() {
            this.$router.push({ name: 'Register' })
        }
    }
})
</script>

<style></style>