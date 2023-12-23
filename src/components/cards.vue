<template>
    <div>
        <div id="main">
            <div>
                <h1>{{ title }}</h1>
            </div>
            <div>
                <h2>{{ subtitle }}</h2>
            </div>
            <div>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        title:String,
        subtitle:String,
        text:String
    },
}
</script>
<style scoped>
#main{
    border: 1px solid black;
    width: 30%;
    padding: 20px;
}
p{
    word-break: break-all;
}
</style>