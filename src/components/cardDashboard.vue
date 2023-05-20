<template>
  <div class="col">
    <div class="card-dashboard-wrapper">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="fw-semibold main-color">{{title_card}}</p>
          <p class="title-font fs-3 mt-1">{{number_card}}</p>
        </div>
        <img :src="img_url" alt="" class="img-fluid" draggable="false">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardDashboard",
  props:{
    title_card:{
      type:String,
      required:true
    },
    number_card:{
      type:String,
      required: true
    },
    img_url:{
      type:String,
      required:true
    }
  },

}
</script>

<style scoped>

</style>