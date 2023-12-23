<template>
    <div class="flex">
      <img :src="userProfileImageUrl" alt="User Profile Image" class="profile-image">
      <div class="text">
     <strong> <p style="width: 100%; font-size: 14px;">{{ userName }}</p></strong>
      <small><p>{{ work }}</p></small>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userName: String,
      userProfileImageUrl: String,
      work:String
    },
  };
  </script>
  
  <style scoped>
  .profile-image {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    
  }
  .flex{
    display: flex;
    justify-content: space-between;
    width: fit-content;

  }
  .text{
    margin-left: 5px;
    margin-top: -5px;
    line-height: 10px;
  }

  </style>
  