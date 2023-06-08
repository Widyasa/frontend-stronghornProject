<template>
  <div class="px-5 mt-5">
      <div class="top-part row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
        <card-dashboard :img_url="'../../public/img/dashboard/dashboard1.svg'" number_card="150" title_card="Number of Members" />
        <card-dashboard :img_url="'../../public/img/dashboard/dashboard2.svg'" number_card="40" title_card="Number of Trainers" />
        <card-dashboard :img_url="'../../public/img/dashboard/dashboard3.svg'" number_card="260" title_card="Number of Towels" />
        <card-dashboard :img_url="'../../public/img/dashboard/dashboard1.svg'" number_card="260" title_card="Number of Lockers" />
      </div>
      <div class="table-content-wrapper mt-5">
      <p class="title-font fs-3 text-uppercase">request membership</p>
      <div class="mt-5 card-dashboard-wrapper p-4">
        <table class="table" id="dataTable">
          <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Membership</th>
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
</template>
<script>
import CardDashboard from "@/components/cardDashboard.vue";
import detailOrder from "@/views/pages/dashboard/detailOrder.vue";

export default {
  name: "dashboardPage",
  computed: {
    detailOrder() {
      return detailOrder
    }
  },
  components: {CardDashboard}
}
</script>

