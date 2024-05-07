// MyRadioButton.vue
<template>
    <div class="flex items-center">
        <input :id="id" type="radio" :name="name" class="hidden"/>
        <label :for="id" class="cursor-pointer relative">
            <span class="font-bold text-desc text-[14px] absolute top-[4px]">{{ label }}</span>
        </label>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },

        label: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Customize the radio button appearance */
input[type="radio"]+label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #ddd;
    margin-right: 0.5rem;
    margin-top: 5px;
}

input[type="radio"]:checked+label::before {
    background-color: white;
    border: 5.5px solid #4475F2;
}
</style>