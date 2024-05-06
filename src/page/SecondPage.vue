<template>
    <div class="mt-[200px] mb-[50px] h-auto mx-[30px] md:mx-[100px]" id="feature">
        <h3 class="text-[18px] text-primary1 font-extrabold tracking-[2px]">FEATURES</h3>
        <h1 class="text-[25px] md:text-[45px] font-extrabold tracking-[-1px] mt-3">
            🤔• What You Can Do?
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-[80px]">
            <div class="p-[10px] h-auto text-center">
                <button class="bg-primary1 p-[25px] rounded-icon w-auto shadow-2xl">
                    <font-awesome-icon class="text-[35px] text-white" :icon="['fas', 'magnifying-glass']" />
                </button>
                <h2 class="text-[24px] font-bold mt-4">Search Book</h2>
                <div class="flex justify-center mt-6">
                    <p class="text-[14px] font-medium leading-[30px] text-desc w-[75%]">
                    Effortlessly find your next 
                    read with our powerful and intuitive 
                    book search.
                </p>
                </div>
            </div>
            <div class="p-[10px] h-auto text-center">
                <button class="bg-primary1 p-[25px] rounded-icon w-auto shadow-2xl">
                    <font-awesome-icon class="text-[35px] text-white" :icon="['far', 'message']" />
                </button>
                <h2 class="text-[24px] font-bold mt-4">Review Book</h2>
                <div class="flex justify-center mt-6">
                    <p class="text-[14px] font-medium leading-[30px] text-desc w-[75%]">
                        Discover insightful critiques  and 
                        share your thoughts on diverse 
                        literary masterpieces effortlessly.
                </p>
                </div>
            </div>
            <div class="p-[10px] h-auto text-center">
                <button class="bg-primary1 p-[25px] rounded-icon w-auto shadow-2xl">
                    <font-awesome-icon class="text-[35px] text-white" :icon="['far', 'heart']" />
                </button>
                <h2 class="text-[24px] font-bold mt-4">Wishlist Book</h2>
                <div class="flex justify-center mt-6">
                    <p class="text-[14px] font-medium leading-[30px] text-desc w-[75%]">
                        Curate your literary 
                        dreams–wishlist books  for future 
                        adventures and discoveries.
                </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Feature'
})
</script>

<style>

</style>