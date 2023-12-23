<template>
    <div :style="{fontSize:size , fontWeight:weight ,color:color}">
        {{ text }}
    </div>
</template>
<script>
export default{
    props:{
        size:String,
        weight:String,
        color:String,
        text:String
    }
}
</script> 