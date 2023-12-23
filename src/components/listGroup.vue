<template>
    <div class="list-group">
      <div v-for="(item, index) in items" :key="index" class="list-group-item">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .list-group {
    width: 100%;
  }
  
  .list-group-item {
    padding: 10px;
    border: 1px solid #ddd;
    margin-bottom: 5px;
    cursor: pointer;
  }
  
  .list-group-item:hover {
    background-color: #f9f9f9;
  }
  </style>
  