<template>
    <div>
      <input v-model="searchQuery" type="text" placeholder="Search Setu">
      <Icons class="icons" size="20px" text="<i class='fa-solid fa-magnifying-glass'></i>"></Icons>
      <!-- <ul>
        <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
      </ul> -->
    </div>
  </template>
  
  <script>
  // export default {
  //  props:{
  //   items:Array
  //  },
  //   computed: {
  //     // filteredItems() {
  //     //   return this.items.filter(item =>
  //     //     item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     //   );
  //     // },
  //   },
  // };

import Icons from './icons.vue';
export default{
  components:{
    Icons
  }
}

  </script>
  <style scoped>
  input{
    padding: 15px;
    width: 250px;
    border: none;
    border-radius: 10px;
    background-color: white;
  }
  div{
    display: flex;
  }
  .icons{
    position: relative;
    top: 10px;
    left: -30px;
  }
</style>