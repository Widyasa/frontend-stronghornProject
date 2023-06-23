<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">navbar title</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="tableNavbar" data-paging='false'>
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
                <button data-bs-toggle="modal" data-bs-target="#modalEditNavbar" class="btn p-0">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </button>
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
          <table class="table" id="tableHero" data-paging='false'>
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
                <button data-bs-toggle="modal" data-bs-target="#modalEditHero" class="btn p-0">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <modal-component title="Edit Navbar Table" modal-id="modalEditNavbar" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="input-title">Photo Selection</p>
          <input type="file"  @change="onFileChange"  name="" class="input-file-modal mt-2" accept="image/*"  id="imgInp">
        </div>
        <div class="d-flex flex-column">
          <p class="input-title">Preview</p>
          <img id="blah" v-if="url" :src="url"  alt="your image" class="img-preview mt-2"/>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Navigation 1</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Navigation 2</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Navigation 3</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Navigation 4</p>
        <input type="text" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Save Change</button>
    </div>
  </modal-component>
  <modal-component title="Edit Hero Table" modal-id="modalEditHero" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-1">
      <div class="d-flex flex-column">
        <p class="input-title">Hero Title</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Description</p>
        <textarea class="form-input"></textarea>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Button 1</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Button 2</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="input-title">Photo Selection</p>
          <input type="file"  @change="onFileChange"  name="" class="input-file-modal mt-2" accept="image/*"  id="imgInp">
        </div>
        <div class="d-flex flex-column">
          <p class="input-title">Preview</p>
          <img id="blah" v-if="url" :src="url"  alt="your image" class="img-preview mt-2"/>
        </div>
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Save Change</button>
    </div>
  </modal-component>
</template>

<script>
  import ModalComponent from "@/components/modalComponent.vue";
  import {onMounted} from "vue";

  export default {
    components: {ModalComponent},
    setup() {
      onMounted(() =>{
        $(document).ready( function () {
          $('#tableNavbar').DataTable({

          });
          $('#tableHero').dataTable({

          })
        } );
      })
    },
    data(){
      return {
        url: '/img/logo.svg',
      }
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        this.url = URL.createObjectURL(file);
      }
    }
  }




</script>

<style scoped>

</style>