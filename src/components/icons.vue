<template>
    <div>
        <div v-html="text" class="img" :style="{color:color , fontSize:size} ">
           
        </div>
    </div>
</template>
<script>
export default{
    props:{
        text:String,
        color:String,
        size:String
    }
}
</script>