<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <div class="d-flex flex-row justify-content-between">
        <p class="title-font fs-3 text-uppercase">Trainers Data Table</p>
        <button class="btn btn-color" @click="showModalAdd">Add Trainer</button>
      </div>
      <div class="mt-4">
        <div class="card-dashboard-wrapper p-4">
          <table class="table w-100">
            <thead>
            <tr>
              <th>No</th>
              <th>Trainer Photo</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in paginatedData2" :key="index">
              <td>{{item.no}}</td>
              <td><img :src="item.photo" alt=""></td>
              <td>{{item.name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.phoneNumber}}</td>
              <td class="d-flex flex-row gap-2">
                <router-link :to="{name:'trainerDetail'}" class="btn border-0 p-0">
                  <img src="/img/table/detail-icon.svg" draggable="false" class="icon-table w-100 h-100">
                </router-link>
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
              <div v-for="page in totalPages2" :key="page">
                <button class="btn btn-pagination pagination-number border-0" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
              </div>
            </div>
            <button class="btn btn-pagination border-0" @click="nextPage" :disabled="currentPage === totalPages"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-component title="Add Trainer" modal-id="addModalTrainer" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="input-title">Trainer Photo</p>
          <input type="file"  @change="onFileChange"  name="" class="input-file-modal mt-2" accept="image/*"  id="imgInp">
        </div>
        <div class="d-flex flex-column">
          <p class="input-title">Preview</p>
          <img id="blah" v-if="url" :src="url"  alt="your image" class="img-preview mt-2"/>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Name</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Email</p>
        <textarea type="email" class="form-input"></textarea>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Phone Number</p>
        <input type="tel" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Add Trainer</button>
    </div>
  </modal-component>
  <modal-component title="Edit Trainer Trainer" modal-id="editModalTrainer" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column">
          <p class="input-title">Trainer Photo</p>
          <input type="file"  @change="onFileChange"  name="" class="input-file-modal mt-2" accept="image/*"  id="imgInp">
        </div>
        <div class="d-flex flex-column">
          <p class="input-title">Preview</p>
          <img id="blah" v-if="url" :src="url"  alt="your image" class="img-preview mt-2"/>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Name</p>
        <input type="text" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Email</p>
        <textarea type="email" class="form-input"></textarea>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Phone Number</p>
        <input type="tel" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Edit Trainer</button>
    </div>
  </modal-component>
  <delete-modal title="Delete Class Table" modal-id="deleteModal">
    <hr class="hr-form">
    <p class="delete-desc fw-medium">
      Are you sure you want to delete this Trainer table? The process cannot be undo
    </p>
    <hr class="hr-form">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button type="button" class="btn btn-danger-modal">Delete Trainer</button>
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
      trainer: [
        {id:1, no:1, photo:'/img/table/photo1.png', name:"Ivan Verdyansyah", email:"ipan@gresia.date", phoneNumber:"0123456789"}
      ],
      modalStatus: false,
      idAchievement:''
    }
  },
  computed: {

    paginatedData2() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.trainer.slice(startIndex, endIndex);
    },
    totalPages2() {
      return Math.ceil(this.trainer.length / this.itemsPerPage);
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
    showModalAdd(){
      this.modalStatus=false
      $("#addModalTrainer").modal("show");
    },
    showModalEdit(item){
      this.modalStatus=true
      $("#editModalTrainer").modal("show");
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