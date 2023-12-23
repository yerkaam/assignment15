<template>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Question</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="people in peoples">
          <td>{{ people.number }}</td>
          <td>{{ people.name }}</td>
          <td>{{ people.question }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      peoples: Array,
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  