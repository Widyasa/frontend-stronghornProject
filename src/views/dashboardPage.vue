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
        <table class="table-wrapper"></table>
      </div>
    </div>
  </div>
</template>

<script>
import CardDashboard from "@/components/cardDashboard.vue";

export default {
  name: "dashboardPage",
  components: {CardDashboard}
}
</script>

<style scoped>

</style>