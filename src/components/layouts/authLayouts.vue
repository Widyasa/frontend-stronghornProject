<template>
  <section class="auth-content-wrapper container">
    <div class="row align-items-center">
      <div class="col-xl-6 col-lg-7 col-12 ">
        <div class="d-flexjustify-content-center">
            <RouterView />
        </div>
      </div>
      <div class="col-xl-1 d-xl-block d-none"></div>
      <div class="col-lg-5 d-lg-block d-none">
        <img src="../../assets/img/auth/auth-img.png" class="img-fluid" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "authLayouts",
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>