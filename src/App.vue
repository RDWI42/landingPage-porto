<script setup lang="ts">
import FooterVue from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import FifthPageVue from './page/FifthPage.vue';
import FirstPage from './page/FirstPage.vue';
import FourthPageVue from './page/FourthPage.vue';
import SecondPageVue from './page/SecondPage.vue';
import ThirdPageVue from './page/ThirdPage.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <Navbar/>
  <FirstPage/>
  <SecondPageVue></SecondPageVue>
  <ThirdPageVue/>
  <FourthPageVue/>
  <FifthPageVue/>
  <FooterVue/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
