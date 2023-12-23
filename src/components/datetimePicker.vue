<template>
    <div>
      <label>{{ label }}</label>
      <input  v-model="selectedDateTime" :type=type />
    </div>
  </template>
  
  <script>
  
  
  export default {
    props: {
      label: String,
    },
    data() {
      return {
        selectedDateTime: getCurrentDateTime(), 
      };
    },
    computed:{
        type(){
            return "datetime-local"
        }
    }
  };
  
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1)
    const day = String(now.getDate())
    const hours = String(now.getHours())
    const minutes = String(now.getMinutes())
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  </script>
  
  <style scoped>
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    
    padding: 8px;
    box-sizing: border-box;
  }
  </style>
  