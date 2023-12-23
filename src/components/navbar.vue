<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/">Home</router-link>
      </div>
  
      <div class="navbar-menu">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Add your navbar styles here */
  .navbar {
    background-color: #007BFF;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .navbar-brand,
  .navbar-menu {
    display: flex;
    align-items: center;
  }
  
  .router-link {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 5px;
  }
  
  .router-link:hover {
    background-color: #0056b3;
  }
  </style>
  