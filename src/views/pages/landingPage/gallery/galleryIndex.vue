<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">section table</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Title Section</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="text-uppercase">STRONGHORN GYM GALLERY</td>
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
      <p class="title-font fs-3 text-uppercase">Gallery Table</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Photo Gallery</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td><img src="/img/table/photo-service.png" alt=""></td>
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
  </div>
</template>

<script>
export default {
  name: "galleryIndex"
}
</script>

<style scoped>

</style>