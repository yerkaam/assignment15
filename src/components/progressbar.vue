<template>
    <div>
        
<svg width="500" viewBox="10 15 100 35">
  <circle r='31.84713375796178' cx="50" cy="50" fill="none" stroke="#ccc" stroke-width="4" />
  <circle  r='31.84713375796178' cx="50" cy="50" fill="none" stroke="#000" stroke-width="4" :stroke-dasharray="number" id="circle" />
  <text x="50" y="45" id="text">{{ number }}</text>
  
</svg>

    </div>
</template>

<script>
export default {
    props: {
        number: String
    },
   
}
</script>

<style scoped>

body {
  text-align: center;
  transform: scale(0.7) translateY(-50px);
}

text {
  text-anchor: middle;
  alignment-baseline: central;
  font-size: 12px;
  font-family: sans-serif;
}

#circle {
  transition: 0.3s linear;
}



p {
  transform: scale(1.4);
}
</style>
