<template>
    <div class="mt-[200px] mb-[50px] h-auto mx-[30px] md:mx-[100px]" id="review">
        <h3 class="text-[18px] text-primary1 font-extrabold tracking-[2px]">REVIEWS</h3>
        <h1 class="text-[25px] md:text-[45px] font-extrabold tracking-[-1px] mt-3">
            💬• Reviews of Others
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[50px] mt-[50px] md:mt-[80px]">
            <div class="px-[20px] h-auto text-center border border-border py-[40px] shadow-2xl">
                <font-awesome-icon class="text-[140px] text-primary1" :icon="['fas', 'circle-user']" />
                <div class="flex justify-center mt-6">
                    <p class="text-[14px] font-medium leading-[30px] text-desc w-[75%]">
                        Engaging plot, vivid characters;
                        a captivating read that
                        lingers in your thoughts.
                    </p>
                </div>
                <p class="text-[16px] font-medium text-[#23A6F0] my-[20px]">
                    Ahmad Saugi
                </p>
                <p class="text-[16px] font-medium text-heading">
                    College Student
                </p>
            </div>
            <div class="px-[20px] h-auto text-center border border-border py-[40px] shadow-2xl">
                <font-awesome-icon class="text-[140px] text-primary1" :icon="['far', 'circle-user']" />
                <div class="flex justify-center mt-6">
                    <p class="text-[14px] font-medium leading-[30px] text-desc w-[75%]">
                        Thought-provoking narrative
                        and rich prose. A must-read for
                        any avid book lover!
                    </p>
                </div>
                <p class="text-[16px] font-medium text-[#23A6F0] my-[20px]">
                    Muhammad Alfian
                </p>
                <p class="text-[16px] font-medium text-heading">
                    School Student
                </p>
            </div>
            <div class="px-[20px] h-auto text-center border border-border py-[40px] shadow-2xl">
                <font-awesome-icon class="text-[140px] text-primary1" :icon="['fas', 'universal-access']" />
                <div class="flex justify-center mt-6">
                    <p class="text-[14px] font-medium leading-[30px] text-desc w-[75%]">
                        Immersive storytelling!
                        An enriching literary experience
                        worth savoring and sharing.
                    </p>
                </div>
                <p class="text-[16px] font-medium text-[#23A6F0] my-[20px]">
                    Wahyu Amirulloh
                </p>
                <p class="text-[16px] font-medium text-heading">
                    ERP Developer
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Review'
})
</script>

<style></style>