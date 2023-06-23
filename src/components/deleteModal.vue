<template>
  <div class="modal modal-edit fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="content-header d-flex flex-row justify-content-between align-items-center" data-bs-theme="dark">
          <div class="d-flex flex-row gap-3">
            <img src="/img/modal/delet-modal-img.svg" alt="" draggable="false">
            <p class="header-title fs-3 text-capitalize fw-semibold">{{ title }}</p>
          </div>
          <button type="button" class="btn-modal fs-3" data-bs-dismiss="modal" aria-label="Close" data-bs-theme="dark">
            <img src="/img/modal/close-modal-delete.svg" alt="">
          </button>
        </div>

        <slot class=""></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deleteModal",
  props:{
    modalId:{
      type:String,
      required: true
    },
    title:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>