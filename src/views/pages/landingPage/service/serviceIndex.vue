<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">section table</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="tableSection" data-paging='false'>
            <thead>
            <tr>
              <th>No</th>
              <th>Title Section</th>
              <th>Photo Section</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td class="text-uppercase">Explore our programs to shape your body</td>
              <td><img src="../../../../../public/img/table/photo-service.png" alt=""></td>
              <td class="d-flex flex-row gap-2">
                <button class="btn p-0" data-bs-toggle="modal" data-bs-target="#modalEditSection">
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
      <div class="d-flex flex-row justify-content-between">
        <p class="title-font fs-3 text-uppercase">service Table</p>
        <button class="btn btn-color" data-bs-toggle="modal" data-bs-target="#modalAddService">Add Service</button>
      </div>
      <div class="mt-4">
        <div class="card-dashboard-wrapper p-4">
          <table class="table" id="tableService">
            <thead>
            <tr>
              <th>No</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Icon Service</th>
              <th>Button</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Strength Training</td>
              <td style="max-width: 250px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante. Suspendisse.</td>
              <td><img src="../../../../../public/img/table/service-icon.svg" alt=""></td>
              <td>Start Now</td>
              <td class="d-flex flex-row gap-2">
                <button class="btn p-0" data-bs-toggle="modal" data-bs-target="#modalEditService">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </button>
                <button class="btn p-0" data-bs-target="#modalDeleteService" data-bs-toggle="modal">
                  <img src="../../../../../public/img/table/delete-icon.svg" draggable="false" class="icon-table">
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <modal-component title="Edit Section Table" modal-id="modalEditSection" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Title Section</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="input-title">Icon Service</p>
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
  <modal-component title="Edit Service Table" modal-id="modalEditService" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Service Name</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Description</p>
        <textarea type="text" class="form-input"></textarea>
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
      <div class="d-flex flex-column">
        <p class="input-title">Button</p>
        <input type="text" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Save Change</button>
    </div>
  </modal-component>
  <modal-component title="Add Service Table" modal-id="modalAddService" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Service Name</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Description</p>
        <textarea type="text" class="form-input"></textarea>
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
      <div class="d-flex flex-column">
        <p class="input-title">Button</p>
        <input type="text" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Add Service</button>
    </div>
  </modal-component>
  <delete-modal title="Delete Service Table" modal-id="modalDeleteService">
    <hr class="hr-form">
    <p class="delete-desc fw-medium fs-5">
      Are you sure you want to delete this service table? The process cannot be undo
    </p>
    <hr class="hr-form">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-danger-modal">Delete Service</button>
    </div>
  </delete-modal>
</template>

<script>
import ModalComponent from "@/components/modalComponent.vue";
import DeleteModal from "@/components/deleteModal.vue";
import {onMounted} from "vue";


export default {
  components: {DeleteModal, ModalComponent},

  data(){
    return {
      url: '/img/logo.svg',
      itemsPerPage: 10, // Jumlah item per halaman
      currentPage: 1, // Halaman saat ini
      section: [
        {id:1, no: 1, titleSection: "Explore our programs to shape your body", image:"/img/table/photo-service.png" },
      ],
      service: [
        {id:1, no:1, photo:'/img/table/photo1.png', name:"Ivan Verdyansyah", email:"ipan@gresia.date", phoneNumber:"0123456789"}
      ],
    }
  },
  computed:{
    paginatedData1() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.section.slice(startIndex, endIndex);
    },
    totalPages1() {
      return Math.ceil(this.section.length / this.itemsPerPage);
    },
    paginatedData2() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.service.slice(startIndex, endIndex);
    },
    totalPages2() {
      return Math.ceil(this.service.length / this.itemsPerPage);
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    showModalSection() {
      $("#modalSection").modal("show");
    },
    showModalAdd(){
      this.modalStatus=false
      $("#modalAddService").modal("show");
    },
    showModalEdit(item){
      this.modalStatus=true
      $("#editModalClass").modal("show");
      this.achievements.icon = item.icon
      this.achievements.number = item.number
      this.achievements.description = item.description
    },
    showModalDelete(achievementId){
      $("#deleteModal").modal("show");
      this.idAchievement = achievementId
      console.log(this.idAchievement)
    }
  }
}
</script>

<style scoped>

</style>