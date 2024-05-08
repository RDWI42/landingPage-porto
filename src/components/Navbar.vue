<template>
    <nav :class="{ 'bg-transparent': !scrolled, 'bg-primary1 border-b-2 border-[#4737FF]': scrolled }"
        class="sticky top-0 z-50 py-[10px] px-[30px] duration-[0.2s] md:px-[100px]">
        <div class="container mx-auto">
            <div class="grid grid-cols-6">
                <a href="#home" class="flex space-x-2 items-center">
                    <img src="../assets/Logo.png" alt="">
                    <div class="font-bold text-[18px]" :class="{'text-black': !scrolled, 'text-white': scrolled}">Rizky</div>
                </a>
                <ul class="space-x-8 col-span-3 items-center hidden md:flex">
                    <li><a href="#feature" :class="{
                        'text-white': scrolled,
                        'text-[#9A9EA6]': !scrolled,
                    }"
                            class="text-[14px] hover:text-[#4737FF]">
                            Feature
                        </a></li>
                    <li><a href="#service" :class="{
                        'text-white': scrolled,
                        'text-[#9A9EA6]': !scrolled,
                    }"
                            class="text-[14px] hover:text-[#4737FF]">
                            Service
                        </a></li>
                    <li><a href="#review" :class="{
                        'text-white': scrolled,
                        'text-[#9A9EA6]': !scrolled,
                    }"
                            class="text-[14px] hover:text-[#4737FF]">
                            Review
                        </a></li>
                    <li><a href="#location" :class="{
                        'text-white': scrolled,
                        'text-[#9A9EA6]': !scrolled,
                    }"
                            class="text-[14px] hover:text-[#4737FF]">
                            Location
                        </a></li>
                </ul>
                <div class="justify-end col-span-2 hidden md:flex">
                    <button class="text-[16px] text-[#181E4B] font-bold 
                    px-[50px] py-[8px] rounded-login bg-white" @click="linkLogin">Login</button>
                </div>
                <div class="cursor-pointer justify-end col-span-5 flex md:hidden" 
                :class="{'text-white': scrolled, 'text-black': !scrolled}"
                @click="toggleNav1">
                    <span class="text-3xl">&#9776;</span>
                </div>
            </div>
        </div>
    </nav>
    <!-- mobile -->
    <div class="h-full fixed z-50 top-0 right-0 bg-primary1 overflow-x-hidden duration-[0.5s] pt-[60px]"
    :class="{'w-[0]': !isOpen, 'w-full sm:w-[250px]':isOpen}">
        <div class="text-white font-bold text-[20px] absolute top-[10px] right-[25px]" @click="closeNav1">&times;</div>
        <ul class="">
            <li class="py-[15px] text-center"><a href="#feature" class="text-[14px] text-white px-10 hover:text-[#4737FF]" @click="closeNav1">
                    Feature
                </a></li>
            <li class="py-[15px] text-center"><a href="#service" class="text-[14px] text-white px-10 hover:text-[#4737FF]" @click="closeNav1">
                    Service
                </a></li>
            <li class="py-[15px] text-center"><a href="#review" class="text-[14px] text-white px-10 hover:text-[#4737FF]" @click="closeNav1">
                    Review
                </a></li>
            <li class="py-[15px] text-center"><a href="#location" class="text-[14px] text-white px-10 hover:text-[#4737FF]" @click="closeNav1">
                    Location
                </a></li>
        </ul>
        <div class="mt-[30px] px-5 text-center">
            <button class="text-[16px] text-[#181E4B] font-bold 
                    px-[50px] py-[8px] rounded-login bg-white" @click="linkLogin">Login</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
    name: 'Navbar',
    setup() {
        const scrolled = ref(false);
        const scrollPosition = ref(0);
        // const isOpen = ref(false)

        // const toggleNav = ()=>{
        //     isOpen.value = !isOpen.value
        // }
        // const closeNav = () => {
        //     isOpen.value = false
        //     console.log('cek')
        // }

        const handleScroll = () => {
            scrolled.value = window.scrollY > 100;
            scrollPosition.value = window.scrollY
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return { scrolled, scrollPosition, 
            // isOpen, toggleNav, closeNav 
        };
    },
    data(){
        return {
            isOpen: false
        }
    },
    methods:{
        closeNav1(){
            this.isOpen = false
        },
        toggleNav1(){
            this.isOpen = !this.isOpen
        },
        linkLogin() {
            this.$router.push({ name: 'Login' })
            console.log('sini')
        }
    }   
});
</script>