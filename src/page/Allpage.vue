<template>
    <Navbar />
    <FirstPage />
    <SecondPageVue></SecondPageVue>
    <ThirdPageVue />
    <FourthPageVue />
    <FifthPageVue />
    <FooterVue />
</template>

<script lang="ts">
import FooterVue from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import FifthPageVue from '../page/FifthPage.vue';
import FirstPage from '../page/FirstPage.vue';
import FourthPageVue from '../page/FourthPage.vue';
import SecondPageVue from '../page/SecondPage.vue';
import ThirdPageVue from '../page/ThirdPage.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Allpage',
    components:{
        FooterVue,
        Navbar,
        FifthPageVue,
        FirstPage,
        FourthPageVue,
        SecondPageVue,
        ThirdPageVue
    }
});
</script>

<style></style>