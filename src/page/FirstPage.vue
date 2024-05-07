<template>
    <div class="my-[30px] h-auto grid justify-center mx-[30px] md:mx-[100px]" id="home">
        <div class="lg:flex mt-2">
            <div class="w-[600px]">
                <h1 class="font-bold text-heading leading-[80px] tracking-[-5px] text-[50px] md:text-[76px]">Search & review your 
                    <span class="font-bold text-primary1 underline underline-offset-8 decoration-[3px] text-[50px] md:text-[76px]">fav book</span>
                    effortlessly
                </h1>
                <p class="text-[16px] font-light text-desc mt-10 leading-[30px] w-[95%]">
                    Embark on a literary journey like never before with our revolutionary <br>
                    library application! Introducing a seamless experience <br>
                    that transcends traditional boundaries, where  you <br>
                    can effortlessly search your favorite books.
                </p>
                <button class="flex items-center px-[40px] py-[15px] bg-primary1 rounded-login text-white mt-10
                text-[16px] font-bold shadow-2xl">
                    Start now &nbsp;
                    <font-awesome-icon class="text-[12px]" :icon="['fas', 'arrow-right']" />
                </button>
            </div>
            <div class="relative z-30 hidden w-[700px] 2xl:block">
                <img class="absolute z-10 left-[-5px] bottom-[-85px] w-[40%]" src="../assets/book1.png" alt="">
                <img class="absolute z-10 left-[265px] top-[-35px] w-[35%]" src="../assets/book2.png" alt="">
                <img class="absolute z-10 left-[330px] bottom-[-95px] w-[28%]" src="../assets/book3.png" alt="">
                <img class="absolute z-10 right-[-60px] top-[20%] w-[35%]" src="../assets/book4.png" alt="">

                <img class="background-1 w-full" src="../assets/Cover2.png" alt="">
                <img class="background-1 w-full" src="../assets/Cover1.png" alt="">
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
    top: -98px;
    right: -111px;
    z-index: 1;
}

</style>