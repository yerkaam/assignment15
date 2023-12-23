<template>
    <div>
      <div v-for="(tag, index) in tags" :key="index" class="tag">
        {{ tag }}
        <span @click="removeTag(index)">x</span>
      </div>
  
      <input v-model="newTag" @keydown.enter="addTag" placeholder="Add a tag" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tags: [],
        newTag: '',
      };
    },
    methods: {
      addTag() {
        if (this.newTag && !this.tags.includes(this.newTag)) {
          this.tags.push(this.newTag);
          this.newTag = '';
          this.$emit('tags-updated', this.tags);
        }
      },
      removeTag(index) {
        this.tags.splice(index, 1);
        this.$emit('tags-updated', this.tags);
      },
    },
  };
  </script>
  
  <style scoped>
  .tag {
    display: inline-block;
    background-color: #007BFF;
    color: #fff;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .tag span {
    margin-left: 5px;
    cursor: pointer;
  }
  </style>
  