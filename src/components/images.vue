<template>
    <img :src="require(`@/assets/${imagepath}`)" alt="">
</template>
<script>
export default{
    props:{
        imagepath:String
    }
}
</script>
