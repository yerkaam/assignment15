<template>
    <div>
        <label>{{ label }}</label>
        <input v-model="inputValue" :type="type">
    </div>
</template>
<script>
export default{
   props:{
    label:String
   },
  
   data(){
    return{
        inputValue:''
    }
   },
   computed:{
    type(){
        return "email"
    }
   }
}
</script>
<style scoped>
 label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 40%;
    border: 0;
  padding: 0.5rem;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;

  }

</style>