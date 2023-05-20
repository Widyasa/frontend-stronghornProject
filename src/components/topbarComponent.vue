<template>
  <div class="topbar-wrapper">
    <div class="px-5">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-row">
          <div class="search-input-wrapper d-xl-flex d-none flex-row gap-1 px-3">
            <input class="border-0 me-2 py-2 form-search" type="search" placeholder="Search Activity" id="searchInput" aria-label="Search">
            <div class="d-flex search-icon-wrapper h-100 align-items-center">
                    <span class="material-icons search-icon">
                        search
                    </span>
            </div>
          </div>
          <div class="d-xl-none hamburger-wrapper d-flex text-white align-self-center">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>

        <div class="profile-wrapper d-flex flex-row align-items-center gap-3">
          <div class="profile-name text-end">
            <p class="fs18 text-brown">Aditya Prayathna</p>
            <p class="grey-color fs14">Admin</p>
          </div>
          <img src="{{asset('img/topbar/profile.svg')}}" class="img-fluid" width="50" alt="">
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