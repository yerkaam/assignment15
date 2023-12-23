<template>
    <div>
      <input type="range" v-model="sliderValue" @input="handleSliderChange" :min="min" :max="max" />
      <span>{{ sliderValue }}</span>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
    },
    setup() {
      const sliderValue = ref(50);
  
      const handleSliderChange = () => {
        console.log('Slider value:', sliderValue.value);
      };
  
      return {
        sliderValue,
        handleSliderChange,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  input {
    width: 100%;
  }
  
  span {
    display: inline-block;
    margin-top: 10px;
  }
  </style>
  