<template>
    <div>
      <label>
        <input type="checkbox" :checked="isChecked" @change="toggleCheckbox" />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
    },
    data() {
      return {
        isChecked: false,
      };
    },
    methods: {
      toggleCheckbox() {
        this.isChecked = !this.isChecked;
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
  