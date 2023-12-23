<template>
    <div>
        <ul v-for="le in lis">
            <li>{{ le }}</li>
        </ul>
    </div>
</template>
<script>
export default{
    props:{
        lis:Array
    }
}
</script>
<style>
li{
    list-style: none;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
}
</style>