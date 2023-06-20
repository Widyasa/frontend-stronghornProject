<template>
      <input :disabled="disabled" :type="input_type"  class="input-text w-100" :placeholder="placeholderValue"/>
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
    },
    disabled:{
      type: Boolean,
      default: false
    }
    

  },
  computed:{
    placeholderValue() {
      return this.placeholder
    },
    inputType() {
      return this.input_type
    },
    ariaDisable(){
      return this.aria_disable
    }

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