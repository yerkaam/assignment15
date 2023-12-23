<template>
    <div>
        <div id="main" @mouseover="moved" @mouseout="moveout">
            {{ label }}
        </div>
        <div id="tooltip" class="hide" >
            {{ text }}
        </div>
    </div>
</template>
<script>

export default{
    props:{
        label:String,
        text:String
    },
    data(){
        return{
            move:false
        }
    },
    methods:{
        moved(){
            let tool = document.getElementById('tooltip')
          
                tool.classList.remove('hide')
           
        },
        moveout(){
            let tool = document.getElementById('tooltip')
            tool.classList.add('hide')
        }
    }

}
</script>
<style scoped>
#main{
width: fit-content;
background-color: aquamarine;
padding: 5px;
}
.hide{
    display: none;
}
#tooltip{
    opacity: 0.7;
   width: fit-content;
   padding: 2px;
    background-color: aqua;
}
</style>