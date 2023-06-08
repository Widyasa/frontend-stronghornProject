<template>
  <div class="px-5 pt-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">navbar title</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th style="width: 200px">Brand Logo</th>
              <th style="max-width: 188px">Navigation 1</th>
              <th style="max-width: 188px">Navigation 2</th>
              <th style="max-width: 188px">Navigation 3</th>
              <th style="max-width: 188px">Navigation 4</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td><img src="../../../../../public/img/logo.svg" alt=""></td>
              <td>Home</td>
              <td>Classes</td>
              <td>Trainers</td>
              <td>Profile</td>
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
      <p class="title-font fs-3 text-uppercase">Heroes Table</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="dataTable">
            <thead>
            <tr>
              <th>No</th>
              <th>Hero Title</th>
              <th>Description</th>
              <th>Button 1</th>
              <th>Button 2</th>
              <th>Photo Selection</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Improve your fitness level for the better!</td>
              <td style="max-width: 250px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante. Suspendisse.</td>
              <td>Start Now</td>
              <td>Learn More</td>
              <td><img src="../../../../../public/img/table/photo1.png" alt=""></td>
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
  name: "heroIndex"
}
</script>

<style scoped>

</style>