<template>
  <div>
    <label>{{ label }}</label>
    <select v-model="selectedOption" placeholder="Lashyn chort">
      <option v-for="option in options" :key="option.value" :value="option.value" >{{ option.label }}</option>
    </select>
  </div>
</template>

<script>

export default {
  props: {
    label: String,
    options: Array,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

select {
  width: 40%;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
 border: 1px solid white;
}
</style>
