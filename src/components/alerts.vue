<template>
    <div>
        <div>
            <button @click="sho">Alert</button>
        </div>
        <div id="alerts" class="hid">
        <div id="alert" >
            <div id="tit" >
            <div class="text">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
        <div class="btn">
            <button @click="hid">Ok</button>
        </div>
    </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:String,
        title:String
    },
    methods:{
        hid(){
            let alert = document.getElementById('alerts')
            alert.classList.add('hid');
        },
        sho(){
            let alert = document.getElementById('alerts')
            alert.classList.remove('hid')
        }
    }
}
</script>

<style scoped>
#alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
#tit{
    background-color: white;
    border: 1px solid black;
    padding: 30px;
}
.hid{
    display: none;
}
.btn{
    display: flex;
    justify-content: flex-end;
}

</style>
