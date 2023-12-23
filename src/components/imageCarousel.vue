<template>
    <div class="image_carousel">
      <button class="button" @click="prev">Previous</button>
        <img :key="current" :src="current" />
      <button class="button" @click="next">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        index: 0,
      };
    },
    props: {
      images: Array,
    },
    computed: {
      current() {
        return this.images[this.index];
      },
    },
    methods: {
      next() {
        this.index = (this.index + 1) % this.images.length;
      },
      prev() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .image_carousel {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  
  .button {
    padding: 10px;
    margin: 0 10px;
  }
  </style>
  