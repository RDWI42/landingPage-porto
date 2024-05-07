<template>
    <div class="grid justify-items-center mt-[50px]">
        <img src="../assets/Logologin.png" alt="">

        <div
            class="shadow-2xl rounded-5px w-[730px] pt-[40px] px-[30px] pb-[20px] my-[50px] border-t-2 border-primary1">
            <button class="text-[16px] text-linkActive" @click="linkHome">Home</button>
            <span class="text-desc"> / Register</span>

            <h3 class="text-[20px] font-bold text-heading mt-[30px]">Register</h3>
            <p class="text-desc mt-[10px] mb-[30px]">Register yourself to do something on Lidia.</p>
            <form>
                <div class="grid grid-cols-2 gap-5">

                    <FormInputVue label="Full Name" placeholder="Full Name" inputId="fullname" :inputType="'text'">
                    </FormInputVue>
                    <FormInputVue label="NIK" placeholder="e.g. 1050241708900001" inputId="nik" :inputType="'text'">
                    </FormInputVue>

                    <FormInputVue label="Username" placeholder="e.g. alfianchii" inputId="username" :inputType="'text'">
                    </FormInputVue>
                    <FormInputVue label="Email" placeholder="e.g. alfian.ganteng@gmail.com" inputId="email"
                        :inputType="'text'"></FormInputVue>

                    <FormInputVue label="Phone" placeholder="e.g. 1050241708900001" inputId="phone" :inputType="'text'">
                    </FormInputVue>
                    <FormInputVue label="Born" placeholder="e.g. 1050241708900001" inputId="born" :inputType="'date'">
                    </FormInputVue>

                    <FormInputVue label="Address" placeholder="e.g. 1050241708900001" inputId="address"
                        :inputType="'text'"></FormInputVue>
                    <div class="flex flex-col">
                        <label class="font-bold text-heading mb-[15px]">Gender</label>
                        <div class="grid grid-cols-4">
                            <RadioButtonVue id="male" name="gender" value="male" label="Male" />
                            <RadioButtonVue id="female" name="gender" value="female" label="Female" />
                        </div>
                    </div>

                    <FormInputVue label="Password" placeholder="e.g. 4kuBu7uhM3dk1t" inputId="password"
                        :isPassword="true" :inputType="'password'"></FormInputVue>
                    <FormInputVue label="Confirm Password" placeholder="e.g. 4kuBu7uhM3dk1t" inputId="confirmpassword"
                        :isPassword="true" :inputType="'password'"></FormInputVue>

                </div>
            </form>

            <button class="rounded-5px 
            bg-primary1 text-white text-[14px] font-bold 
            w-full 
            py-[10px]
            mt-[30px]">
                Register
            </button>
        </div>
        <p class="text-desc text-[14px] mb-[50px]">© 2024 Lidia. All rights reserved.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormInputVue from '../components/FormInput.vue';
import RadioButtonVue from '../components/RadioButton.vue';
export default defineComponent({
    name: 'register',
    components: {
        FormInputVue,
        RadioButtonVue
    },
    methods:{
        linkHome() {
            this.$router.push({ name: 'Home' })
        },
    }
})
</script>

<style></style>