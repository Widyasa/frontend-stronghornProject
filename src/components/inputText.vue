<template>
  <div class="d-flex flex-column">
    <p class="text-white text-capitalize">{{title_input}}</p>
    <div class="input-text-wrapper">
      <input :type="input_type" v-model="inputModel" class="input-text w-100" :placeholder="placeholderValue"
             :value="inputValue" @input="updateValue($event.target.value)">
    </div>
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
    title_input:{
      type:String,
      required: true
    },
    input_type:{
      type:String,
      required:true,
      validator: function(value) {
        return ['text', 'number', 'email', 'password', 'tel'].indexOf(value) !== -1
      }
    },
    value:{
      type:String,
      required:true,
    }
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
    updateValue(newValue) {
      this.inputValue = newValue
      this.$emit('input', newValue)

    },
    validateInput() {
      if (this.type === 'number' && isNaN(Number(this.inputValue))) {
        this.validInput = false
      } else {
        this.validInput = true
      }
    }
  }

}
</script>

<style scoped>

</style>