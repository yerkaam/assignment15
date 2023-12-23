<template>
    <div>
      <!-- Your component content goes here -->
  
      <div class="circle-loader"></div>
    </div>
  </template>
  
  <style>
  .circle-loader {
    border: 4px solid rgba(0, 123, 255, 0.3);
    border-top: 4px solid #007BFF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto; /* Adjust margin as needed */
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  