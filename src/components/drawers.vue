<template>
    <div>
      <div class="drawer-toggle" @click="toggleDrawer">
        Toggle Drawer
      </div>
  
      <transition name="drawer-fade">
        <div v-if="showDrawer" class="drawer">
          <div class="drawer-content">
            <div @click="closeDrawer" class="close-button">Close</div>
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDrawer: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.showDrawer = !this.showDrawer;
      },
      closeDrawer() {
        this.showDrawer = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your drawer styles here */
  .drawer-toggle {
    cursor: pointer;
    padding: 10px;
    background-color: #007BFF;
    color: #fff;
  }
  
  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background-color: #fff;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  }
  
  .drawer-content {
    padding: 20px;
  }
  
  .close-button {
    cursor: pointer;
    color: #007BFF;
  }
  </style>
  