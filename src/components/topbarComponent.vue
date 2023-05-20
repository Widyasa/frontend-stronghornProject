<template>
  <div class="topbar-wrapper">
    <div class="px-5">
      <div class="d-flex flex-row justify-content-between">
        <p class="fw-medium text-white fs-3">
          Welcome Back,
          <span class="main-color">Admin<span>!</span></span>
        </p>
        <div class="btn-wrapper">
          <button class="btn btn-color d-flex flex-row gap-2 align-items-center">
            <img src="../assets/img/topbar/logout-icon.svg" alt="" class="img-fluid" draggable="false">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "topbarComponent"
}
</script>

<style scoped>

</style>