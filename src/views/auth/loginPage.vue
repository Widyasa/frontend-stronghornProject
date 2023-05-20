<template>
  <p class="title-font fs-1 text-uppercase text-center">login as membership</p>
  <div class="d-flex flex-column login-content-wrapper gap-5">
    <input-text input_type="text"  title_input="username:" :placeholder="'Enter Your Username'" />
    <input-text input_type="email" title_input="email:" :placeholder="'Enter Your Email'" />
    <input-text input_type="password" title_input="password:" :placeholder="'Enter Your Password'" />
    <div class="d-flex flex-md-row flex-column gap-4 align-items-center">
      <button class="btn btn-color w-100" style="max-width: 400px !important;">Login Now</button>
        <p class="text-white ">
          Don’t have account? <span><router-link :to="{name:'register'}" class="main-color link-text">Register</router-link></span>
        </p>

    </div>
  </div>
</template>

<script>
import InputText from "@/components/inputText.vue";

export default {
  name: "loginPage",
  components: {InputText}
}
</script>

<style scoped>

</style>