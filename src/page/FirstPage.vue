<template>
    <div class="my-[30px] h-auto mx-[30px] md:mx-[100px]" id="home">
        <img class="background-1 w-[54.5%] hidden lg:block" src="../assets/Cover2.png" alt="">
        <img class="background-1 w-[58%] hidden lg:block" src="../assets/Cover1.png" alt="">
        <div class="lg:grid grid-cols-2 mt-2">
            <div>
                <h1 class="font-bold text-heading leading-[80px] tracking-[-5px] text-[50px] md:text-[76px]">Search & review your 
                    <span class="font-bold text-primary1 underline underline-offset-8 decoration-[3px] text-[50px] md:text-[76px]">fav book</span>
                    effortlessly
                </h1>
                <p class="text-[16px] font-light text-desc mt-10 leading-[30px] w-[95%]">
                    Embark on a literary journey like never before with our revolutionary 
                    library application! Introducing a seamless experience 
                    that transcends traditional boundaries, where  you 
                    can effortlessly search your favorite books.
                </p>
                <button class="flex items-center px-[40px] py-[15px] bg-primary1 rounded-login text-white mt-10
                text-[16px] font-bold shadow-2xl">
                    Start now &nbsp;
                    <font-awesome-icon class="text-[12px]" :icon="['fas', 'arrow-right']" />
                </button>
            </div>
            <div class="relative z-30 hidden lg:block">
                <img class="absolute left-0 bottom-0 w-[40%]" src="../assets/book1.png" alt="">
                <img class="absolute left-[175px] top-[-25px] w-[35%]" src="../assets/book2.png" alt="">
                <img class="absolute left-[250px] bottom-[-10px] w-[28%]" src="../assets/book3.png" alt="">
                <img class="absolute right-[-36px] top-[20%] w-[35%]" src="../assets/book4.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',

});
</script>

<style>
.background-1{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

</style>