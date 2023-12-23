<template>
    <nav class="pagination">
      <ul>
        <li @click="goToPage(1)" :class="{ 'disabled': currentPage === 1 }">First</li>
        <li @click="prevPage" :class="{ 'disabled': currentPage === 1 }">Previous</li>
  
        <li v-for="page in pages" :key="page" @click="goToPage(page)" :class="{ 'active': currentPage === page }">
          {{ page }}
        </li>
  
        <li @click="nextPage" :class="{ 'disabled': currentPage === totalPages }">Next</li>
        <li @click="goToPage(totalPages)" :class="{ 'disabled': currentPage === totalPages }">Last</li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      totalItems: {
        type: Number,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      pages() {
        const pagesArray = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pagesArray.push(i);
        }
        return pagesArray;
      },
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
          this.$emit('page-change', page);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$emit('page-change', this.currentPage + 1);
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.$emit('page-change', this.currentPage - 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    margin-top: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  li {
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
  }
  
  li.disabled {
    cursor: not-allowed;
  }
  
  li.active {
    background-color: #007BFF;
    color: #fff;
  }
  </style>
  