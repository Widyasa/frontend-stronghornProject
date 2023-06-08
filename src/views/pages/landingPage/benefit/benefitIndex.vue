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
              <th>Description</th>
              <th>Photo Section</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="text-uppercase" style="max-width: 100px">Train your muscles & fitness starts here</td>
              <td class="text-uppercase" style="max-width: 240px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante. Suspendisse.</td>
              <td><img src="../../../../../public/img/table/photo-service.png" alt=""></td>
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
      <div class="d-flex flex-row justify-content-between">
        <p class="title-font fs-3 text-uppercase">benefit Table</p>
        <button class="btn btn-color">Add Benefit</button>
      </div>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Benefit</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Lorem ipsum dolor sit amet</td>
              <td class="d-flex flex-row gap-2">
                <RouterLink :to="{name:'detailOrder'}">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </RouterLink>
                <RouterLink :to="{name:'detailOrder'}">
                  <img src="../../../../../public/img/table/delete-icon.svg" draggable="false" class="icon-table">
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
  name: "benefitIndex"
}
</script>

<style scoped>

</style>