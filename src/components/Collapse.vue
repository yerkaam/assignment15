<template>
    <div>
        <div id="mains">
        <div id="main" @click="clickedin">
            <div>
                <h1>{{ label }}</h1>
            </div>
            <div id="ico">+</div>
        </div>
        <div id="cont" class="hide" >{{ text }}</div>
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
            clicked:false
        }
    },
    methods:{
        clickedin(){
            this.clicked = !this.clicked
            let icon = document.getElementById('ico')
            let cont = document.getElementById('cont')
            if(this.clicked){
            cont.classList.remove('hide')
            icon.innerHTML="-"
            }
            else{
                cont.classList.add('hide')
            icon.innerHTML="+"
                
            }
        }
    }

}
</script>
<style scoped>
#mains{
    border: 1px solid black;
    padding: 20px;
}
#main{
    
display: flex;
justify-content: space-between;
}
#ico{
    font-size: 30px;
}
#cont{
    font-size: 18px;
}
.hide{
display: none;
}

</style>