<template>
    <div class="input-text-wrapper">
      <input :type="input_type" class="input-text w-100" :placeholder="placeholderValue" />
    </div>
</template>

<script>
export default {
  name: "inputText",
  props: {
    placeholder:{
      type:String,
      required:true
    },
    input_type:{
      type:String,
      required:true,
      validator: function(value) {
        return ['text', 'number', 'email', 'password', 'tel'].indexOf(value) !== -1
      }
    },
  },
  computed:{
    placeholderValue() {
      return this.placeholder
    },
    inputType() {
      return this.input_type
    },

  },
  data(){
    return {
      inputValue: this.value,
      validInput: true
    }
  },
  methods:{

  }

}
</script>

<style scoped>

</style>