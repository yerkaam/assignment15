<template>
    <div>
        <div>
            <button @click="show" >Modal Window</button>
        </div>
        <div id="modal" class="hide">
        <div  id="window" >
            <div id="tit" >
            <div class="text">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
        <div class="btn">
            <button @click="hide">Ok</button>
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
        hide(){
            let modal = document.getElementById('modal')
            modal.classList.add('hide');
        },
        show(){
            let modal = document.getElementById('modal')
            modal.classList.remove('hide')
        }
    }
}
</script>

<style scoped>
#window {
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
.hide{
    display: none;
}
.btn{
    display: flex;
    justify-content: flex-end;
}

</style>
