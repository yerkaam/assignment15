<template>
    <div>
        <div id="mains">
        <div id="main" @click="clickedin">
            <div>
                <h1>{{ label }}</h1>
            </div>
            <div id="icon">+</div>
        </div>
        <div id="continue" class="hide" >{{ text }}</div>
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
            let icon = document.getElementById('icon')
            let cont = document.getElementById('continue')
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
#icon{
    font-size: 30px;
}
#continue{
    font-size: 18px;
}
.hide{
display: none;
}

</style>