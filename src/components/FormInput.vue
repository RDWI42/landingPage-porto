<template>
    <div class="flex flex-col relative">
        <label :for="inputId" class="font-bold text-heading mt-">{{ label }}</label>
        <input :type="DataType"
            class="border-[1px] border-border rounded-5px hover:border-linkActive hover:border-2 focus:outline-linkActive focus:outline-2 mt-[10px] h-[35px] px-[10px]"
            :class="inputClasses" :placeholder="placeholder" :id="inputId">
        <span v-if="isPassword" class="absolute text-desc top-[40px] right-[10px]" @click="togglePasswordVisibility">
            <font-awesome-icon :icon="['fas', showPassword ? 'eye' : 'eye-slash']" />
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: ''
        },
        inputId: {
            type: String,
            required: true
        },
        inputClasses: {
            type: String,
            default: ''
        },
        isPassword: {
            type:Boolean,
            default: false
        },
        inputType:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            DataType: '',
            showPassword: false
        }
    },
    mounted(){
        this.DataType = this.inputType
    },
    methods:{
        togglePasswordVisibility(){
            if(this.DataType == 'text' ){
                this.DataType = 'password'
                this.showPassword = false
            }else if(this.DataType == 'password'){
                this.DataType = 'text'
                this.showPassword = true
            }
            console.log('cel')
        }
    }
});
</script>

<style></style>