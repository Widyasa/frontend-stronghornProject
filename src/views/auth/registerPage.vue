<template>
    <p class="title-font fs-1 text-uppercase text-center">membership register</p>
    <div class="d-flex flex-column login-content-wrapper gap-5">
      <div class="row gy-4 w-100">
        <div class="col-md-6 col-12">
          <input-text input_type="text"  title_input="First Name:" :placeholder="'Enter Fist Name'" />
        </div>
        <div class="col-md-6 col-12">
          <input-text input_type="text" title_input="Last Name:" :placeholder="'Enter Your Last Name'" />
        </div>
        <div class="col-md-5 col-12">
          <input-text input_type="tel" title_input="Phone Number:" :placeholder="'Enter Your Phone Number'"  />
        </div>
        <div class="col-md-7 col-12">
          <input-text input_type="email" title_input="Email:" :placeholder="'Enter Your Email'" />
        </div>
        <div class="col-12">
          <input-text input_type="password" title_input="password:" :placeholder="'Enter Your Password'" />
        </div>
        <div class="col-md-6 col-12">
          <div class="d-flex flex-column">
            <p class="text-white text-capitalize">Select Membership:</p>
            <select-option
                :options="['1 month', '3 month', '6 month']"
                :default="'select your package'"
                class="select"
            />
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="d-flex flex-column">
            <div class="d-flex flex-column">
              <p class="text-white text-capitalize">Select Membership:</p>
              <div class="">
                <input type="file" id="file-input" class="text-white d-flex flex-row-reverse">
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="d-flex flex-md-row flex-column gap-4 align-items-center">
        <button class="btn btn-color btn-auth w-100" style="max-width: 400px !important;">Login Now</button>
        <p class="text-white ">
          Don’t have account? <span><router-link :to="{name:'register'}" class="main-color link-text">Register</router-link></span>
        </p>

      </div>
    </div>
  </template>


<script>
import InputText from "@/components/inputText.vue";
import SelectOption from "@/components/selectOption.vue";

export default {
  name: "registerPage",
  components: {SelectOption, InputText},
}
</script>

<style scoped>

</style>