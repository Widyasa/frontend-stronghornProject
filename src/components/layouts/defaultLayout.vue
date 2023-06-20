<template>
  <div class="row h-100 min-vh-100">
    <div class="col-xl-2 col-lg-3 col-md-4 col-8 sidebar-wrapper">
      <sidebar-component />
    </div>
    <div class="col-xl-10 col-12 content-wrapper p-0 ">
      <topbar-component />
      <div class=" pt-4 the-content ">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/sidebarComponent.vue";
import TopbarComponent from "@/components/topbarComponent.vue";

export default {
  name: "defaultLayout",
  components: {TopbarComponent, SidebarComponent},

}
</script>

<style scoped>

</style>