<template>
    <div>
      <button id="button" @click="toggleDropdown">></button>
      <div class="line">
      <ul v-if="isDropdownOpen" class="dropdown-list" v-for="lie in lies">
        <li>{{ lie }}</li>
      </ul>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  li{
    width: 100px;
    text-align: start;
    border: none;
    padding: 0;
    line-height: 10px;
    position: relative;
    left: -30px;
  }

  .dropdown-list{
    display: flex;
  }
  .line{
    border-left: 2px solid black;
    border-radius: 0;
    position: relative;
    left: -60px;
  }
  .dropdown-list li:hover {
    background-color: #f0f0f0;
  }
  button{
    background-color: transparent;
    border: none;
  }
  .rotate{
    transform: rotateX('45px');
  }
  </style>
    <script>
    export default {
      data() {
        return {
          isDropdownOpen: false,
        };
      },
      methods: {
        toggleDropdown() {
          this.isDropdownOpen = !this.isDropdownOpen;
          if(this.isDropdownOpen){
  let button = document.getElementById('button')
  button.classList.add('rotate')
          }
        },
      },
      props:{
          name:String,
          lies:Array
      }
    };
    </script>