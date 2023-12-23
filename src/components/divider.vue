<template>
    <div class="divider">
      <hr class="divider-line">
      <div v-if="text" class="divider-text">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: String,
    },
  };
  </script>
  
  <style scoped>
  .divider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  
  .divider-line {
    width: 100%;
    border: 1px solid #ddd;
  }
  
  .divider-text {
    background-color: #fff;
    padding: 0 10px;
    color: #777;
    font-size: 14px;
  }
  </style>
  