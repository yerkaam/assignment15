<template>
    <div>
      <button :style="{backgroundColor: color, fontSize: size, border: border, color:fontcolor}">
        {{ label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      color: {
        type: String,
        default: "gray"
      },
      size: {
        type: String,
        default: "14px"
      },
      border: String,
      weight: String,
      fontcolor:String
    }
  };
  </script>
  