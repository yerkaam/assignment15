<template>
    <div>
      <label>{{ label }}</label>
      <label v-for="option in options" :key="option.value">
        <input type="radio" :value="option.value" v-model="selectedOption" @change="handleRadioChange" />
        {{ option.label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: Array,
    },
    data() {
      return {
        selectedOption: null,
      };
    },
    methods: {
      handleRadioChange() {
        console.log('Selected option:', this.selectedOption);
      },
    },
  };
  </script>
  
  <style scoped>
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  </style>
  