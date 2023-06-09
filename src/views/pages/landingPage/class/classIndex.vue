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
              <th>Button</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="text-uppercase">Train your muscles & fitness starts here</td>
              <td>Book Now</td>
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
      <p class="title-font fs-3 text-uppercase">classes Table</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Photo Classes</th>
              <th>Title Classes</th>
              <th>Description</th>
              <th>Capacity Class</th>
              <th>Button</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td><img src="/img/table/photo-service.png" alt=""></td>
              <td>Cardio & Strenght Classes</td>
              <td style="max-width: 150px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante. Suspendisse.</td>
              <td>5/10 trainers</td>
              <td>view more</td>
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
  name: "classIndex"
}
</script>

<style scoped>

</style>