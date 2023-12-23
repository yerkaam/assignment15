<template>
    <div>
        <button :style="{backgroundColor:color , fontSize:size}">{{ label }}</button>
    </div>
</template>
<script>
export default{
   props:{
    label:String,
color:{
    type:String,
    default:"gray"
},
size:{
   type:String,
   default:"14px"
}
    

   } ,
   data(){
    return{
        
    }
   }
}
</script>