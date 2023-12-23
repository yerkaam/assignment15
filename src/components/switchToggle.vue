<template>
    <div>
        <div id="shape">
            <div id="circle" @click="clicked">

            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        label:String
    },
    data(){
        return{
        clicke:false
        }
    },

    methods:{
        clicked(){
            this.clicke = !this.clicke
            let circle = document.getElementById('circle')
            if(this.clicke){
            circle.classList.add('transform')
            }
            else circle.classList.remove('transform')
        }
     
    },
    computed:{
        
    }
}
</script>
<style scoped>
#shape{
    border: 1px solid black;
    border-radius: 15px;
    height: 31px;
    width: 70px;
    align-items: center;
}
#circle{
    border: 1px solid black;
        border-radius: 50%;
        background-color: black;
        height: 25px;
        width: 25px;
        position: relative;
        top: 2px;
        left: 2px;
        transition: all .3s;

}
.transform{
        transform: translateX(38px);
    }

</style>