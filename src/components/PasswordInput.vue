<template>
    <div>
        <label>{{ label }}</label>
        <div class="input_group">
        <input v-model="inputValue" :type="type" class="input"/>
        <button class="" @click="togglePassword">{{ btnIcon }}</button>
    </div>
    </div>
</template>
<script>
export default{
    props:{
        label:String,
    },
    data(){
        return{
            inputValue:'',
            showPassword:false
        }
    },
    methods:{
        togglePassword(){
        this.showPassword =!this.showPassword;
        }
    },
    computed:{
        type(){
            return this.showPassword ? "text" : "password";
        },
        btnIcon(){
            return this.showPassword ? "🐵" : "🙈";
        }
    }
}
</script>
<style scoped>
.input_group{
    display: inline-flex;
  background-color: #ffffff;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 2rem;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  width: 41%;
}
.input_group input{
    border: 0;
    width: 100%;
  padding: 0.5rem;
}
.input_group input:focus{
    outline: 0;
}
.input_group button{
  border: 0;
  background-color: inherit;

}
label{
    display: block;
    margin-bottom:5px ;
}
</style>