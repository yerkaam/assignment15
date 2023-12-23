<template>
    <div>
        <div id="main">
            <div id="label">
            <Icons class="icons" size="22px" text="<i class='fa-solid fa-bell'></i>" ></Icons>
            </div>
            <div class="count">
                <div class="era">{{ count }}</div></div>
        </div>
    </div>
</template>
<script>
import Icons from './icons.vue';

export default{
    props: {
        label: String,
        count: String,
    },
    components: { Icons }
}
</script>
<style scoped>
#main{
    display: flex;
}
#label{
    font-size: 30px;
}
.count {
    position: relative;
    left: -12px;
    top: -5px;
  display: inline-table;
  vertical-align: middle;
  width: 15px;
  height: 15px;
  
  background-color: #656262;
  border-radius: 50%;
}
.icons{
    
}
.era {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 12px;
  color: white;
}
</style>