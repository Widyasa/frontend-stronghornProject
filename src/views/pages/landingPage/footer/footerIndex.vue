<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">Footer Link 1</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table">
            <thead>
            <tr>
              <th>No</th>
              <th>Brand Logo</th>
              <th>Link Logo</th>
              <th>Description</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(section, index) in paginatedData1" :key="index">
              <td>{{section.no}}</td>
              <td><img :src="section.brand" alt=""></td>
              <td>{{section.link}}</td>
              <td>{{section.description}}</td>
              <td class="d-flex flex-row gap-2">
                <button class="btn p-0" @click="showModalSection">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="d-flex mt-3 flex-row justify-content-center gap-3 align-items-center">
            <button class="btn btn-pagination border-0" @click="previousPage" :disabled="currentPage === 1">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <div class="d-flex flex-row">
              <div v-for="page in totalPages1" :key="page">
                <button class="btn btn-pagination pagination-number border-0" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
              </div>
            </div>
            <button class="btn btn-pagination border-0" @click="nextPage" :disabled="currentPage === totalPages"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column mt-5">
      <div class="d-flex flex-row justify-content-between">
        <p class="title-font fs-3 text-uppercase">Footer Link 2</p>
        <button class="btn btn-color" @click="showModalAdd">Add Footer</button>
      </div>
      <div class="mt-4">
        <div class="card-dashboard-wrapper p-4">
          <div class="d-flex flex-row gap-3">
            <div class="footer-title-wrapper d-flex align-items-center">
              <p>Navigation</p>
            </div>
            <button class="btn">
              <img src="/img/table/edit-icon.svg" draggable="false" class="img-fluid" alt="">
            </button>
          </div>
          <table class="table w-100 mt-3">
            <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Link</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in paginatedData2" :key="index">
              <td>{{item.no}}</td>
              <td>{{item.name}}</td>
              <td>{{item.link}}</td>
              <td class="d-flex flex-row gap-2">
                <button class="btn border-0 p-0" @click="showModalEdit(item)">
                  <img src="../../../../../public/img/table/edit-icon.svg" draggable="false" class="icon-table">
                </button>
                <button class="btn border-0 p-0" @click="showModalDelete(item.id)">
                  <img src="../../../../../public/img/table/delete-icon.svg" draggable="false" class="icon-table">
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="d-flex mt-3 flex-row justify-content-center gap-3 align-items-center">
            <button class="btn btn-pagination border-0" @click="previousPage" :disabled="currentPage === 1">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <div class="d-flex flex-row">
              <div v-for="page in totalPages1" :key="page">
                <button class="btn btn-pagination pagination-number border-0" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
              </div>
            </div>
            <button class="btn btn-pagination border-0" @click="nextPage" :disabled="currentPage === totalPages"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-component title="Edit Footer Link 1" modal-id="modalSection" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="input-title">Brand Logo</p>
          <input type="file"  @change="onFileChange"  name="" class="input-file-modal mt-2" accept="image/*"  id="imgInp">
        </div>
        <div class="d-flex flex-column">
          <p class="input-title">Preview</p>
          <img id="blah" v-if="url" :src="url"  alt="your image" class="img-preview mt-2"/>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Link Logo</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Description</p>
        <textarea type="text" class="form-input"></textarea>
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Save Change</button>
    </div>
  </modal-component>
  <modal-component title="Add Footer Link 2" modal-id="addModalFooter2" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Name</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Link</p>
        <input type="text" class="form-input">
      </div>

    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Add Footer</button>
    </div>
  </modal-component>
  <modal-component title="Edit Footer Link 2" modal-id="editModalFooter2" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Name</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Link</p>
        <input type="text" class="form-input">
      </div>

    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Save Change</button>
    </div>
  </modal-component>
  <delete-modal title="Delete Benefit Table" modal-id="deleteModal">
    <hr class="hr-form">
    <p class="delete-desc fw-medium">
      Are you sure you want to delete this Footer 2 table? The process cannot be undo
    </p>
    <hr class="hr-form">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button type="button" class="btn btn-danger-modal">Delete Footer 2</button>
    </div>
  </delete-modal>
</template>

<script>
import ModalComponent from "@/components/modalComponent.vue";
import DeleteModal from "@/components/deleteModal.vue";

export default {
  name: "aboutIndex",
  components: {DeleteModal, ModalComponent},
  data(){
    return {
      url: '/img/logo.svg',
      itemsPerPage: 10, // Jumlah item per halaman
      currentPage: 1, // Halaman saat ini
      section: [
        {id:1, no: 1, brand: "/img/logo.svg", link:"#", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante." },
      ],
      footer2: [
        {id:1, no:1, name:"Home", link:"#footer2"}
      ],
      modalStatus: false,
      idAchievement:''
    }
  },
  computed: {
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
      return this.footer2.slice(startIndex, endIndex);
    },
    totalPages2() {
      return Math.ceil(this.footer2.length / this.itemsPerPage);
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
      $("#addModalFooter2").modal("show");
    },
    showModalEdit(benefit){
      this.modalStatus=true
      $("#editModalFooter2").modal("show");
      this.benefit.icon = benefit.icon
      this.benefit.number = benefit.number
      this.benefit.description = benefit.description
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