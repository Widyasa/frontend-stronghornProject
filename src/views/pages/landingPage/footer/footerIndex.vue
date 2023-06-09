<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">Footer Link 1</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Brand Logo</th>
              <th>Links Logo</th>
              <th>Description</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="text-uppercase"><img src="/img/logo.svg" alt=""></td>
              <td>www.atrem-project.com</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante.</td>
              <td class="d-flex flex-row gap-2">
                <RouterLink :to="{name:'detailOrder'}">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </RouterLink>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column mt-5">
      <div class="flex-row d-flex justify-content-between">
        <p class="title-font fs-3 text-uppercase">Footer Link 2</p>
        <button class="btn btn-color">Add Footer</button>
      </div>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <div class="d-flex flex-row gap-3">
            <div class="footer-title-wrapper d-flex align-items-center">
              <p>Navigation</p>
            </div>
            <button class="btn">
              <img src="/img/table/edit-icon.svg" draggable="false" class="img-fluid" alt="">
            </button>
          </div>
          <table class="table mt-4" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Link</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="">home</td>
              <td>www.atrem-project.com</td>
              <td class="d-flex flex-row gap-2">
                <RouterLink :to="{name:'detailOrder'}">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </RouterLink>
                <RouterLink :to="{name:'detailOrder'}">
                  <img src="/img/table/delete-icon.svg" draggable="false" class="icon-table">
                </RouterLink>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerIndex"
}
</script>

<style scoped>

</style>