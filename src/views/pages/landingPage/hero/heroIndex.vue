<template lang="">
    <div class="px-5 pt-5">
        <div class="d-flex flex-column">
          <p class="title-font fs-3 text-uppercase">navbar title</p>
          <div class="mt-5">
            <div class="card-dashboard-wrapper p-4">
                <table class="table" id="dataTable">
          <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Membershipd</th>
            <th>Telephone Number</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Widya Yasa</td>
            <td>widyayasa00@gmail.com</td>
            <td>12 months</td>
            <td>082147382985</td>
            <td class="d-flex flex-row gap-2">
              <RouterLink :to="{name:'detailOrder'}">
                <img src="public/img/table/detail-icon.svg" draggable="false" class="icon-table">
              </RouterLink>
              <RouterLink :to="{name:'detailOrder'}">
                <img src="public/img/table/approve-icon.svg" draggable="false" class="icon-table">
              </RouterLink>
              <RouterLink :to="{name:'detailOrder'}">
                <img src="public/img/table/delete-icon.svg" draggable="false" class="icon-table">
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
  name: "heroIndex",
}
</script>

