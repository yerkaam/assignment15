<template>
    <div>
        <div class="header">
            <div class="logo">
                <Images class="image" imagepath="java.png" ></Images>
                <TextTypo text="Setu" size="24px" weight="500" color="black"></TextTypo>
            </div>
            <div class="buttons">
                <Buttons border="none" label="Marketplace" color="transparent" size="16px" ></Buttons>   
                <Buttons border="none" label="Pages" color="transparent" size="16px"></Buttons>             
            </div>
            <div style="width: 450px; text-align: start;">
                <Searchbars></Searchbars>
            </div>
            <div class="photos">
                <div class="flex">
                 <Labels class="label" text="i class='fa-solid fa-bell'></i>" count="5"></Labels>
                <Icons :text="era" size="20px"></Icons>
                </div>
                <button style="padding: 15px; background-color: blue; border: none; border-radius: 20px; display: flex; color: white;" ><Icons text="<i class='fa-solid fa-bars'></i>"></Icons>CREATE NEW</button>
            </div>
        </div>
    </div>
</template>

<script>
import Buttons from './buttons.vue';
import Images from './images.vue';
import TextTypo from './textTypo.vue';
import Searchbars from './searchbars.vue'
import Icons from './icons.vue';
import Labels from './Labels.vue';

export default {
  props:{

  },
  components:{
    Buttons,
    Images,
    TextTypo,
    Searchbars,
    Icons,
    Labels,
},
data(){
    return{
        era:"<i class='fa-regular fa-heart'></i>"
    }
}
}
</script>

<style scoped>
.header {
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.image{
    width: 40px;
}
.logo {
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.buttons{
    width: 170px;
    display: flex;
    justify-content: space-between;
}
.photos{
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
}
.flex{
    display: flex;
}

</style>
