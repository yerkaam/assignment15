<template>
    <div>
        <div v-for="item in items">
             <button>{{ item }}</button>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        items:Array
    }
}
</script>
<style scoped>
div{
    display: flex;
    justify-content: center;
}
</style>