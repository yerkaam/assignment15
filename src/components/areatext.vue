<template>
    <div>
        <label>{{ label }}</label>
        <textarea v-model="text"></textarea>
    </div>
</template>
<script>
    export default {
        props: {
    label: String,
  },
        data() {
            return {
                text: ''

            }
        },
        methods: {
            ok() {
                console.log(this.text)
                this.text = ''
            }
        }
    }
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

textarea {
  width: 40%;
  padding: 8px;
  box-sizing: border-box;
}
</style>