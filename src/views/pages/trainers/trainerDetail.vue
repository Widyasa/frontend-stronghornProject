<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <p class="title-font fs-3 text-uppercase">Profile Trainer</p>
      <div class="mt-3">
        <div class="card-dashboard-wrapper p-4">
          <table class="table">
            <thead>
            <tr>
              <th>No</th>
              <th>Title Section</th>
              <th>Button</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(section, index) in paginatedData1" :key="index">
              <td>{{section.no}}</td>
              <td>{{section.titleSection}}</td>
              <td>{{section.button}}</td>
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
        <p class="title-font fs-3 text-uppercase">Classes Table</p>
        <button class="btn btn-color" @click="showModalAdd">Add Class</button>
      </div>
      <div class="mt-4">
        <div class="card-dashboard-wrapper p-4">
          <table class="table w-100">
            <thead>
            <tr>
              <th>No</th>
              <th>Photo Classes</th>
              <th>Title Classes</th>
              <th>Descriptions</th>
              <th>Buttons</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in paginatedData2" :key="index">
              <td>{{item.no}}</td>
              <td><img :src="item.photo" alt=""></td>
              <td>{{item.title}}</td>
              <td style="max-width: 250px">{{item.description}}</td>
              <td>{{item.button}}</td>
              <td class="d-flex flex-row gap-2">
                <router-link :to="{name:'classDetail'}" class="btn border-0 p-0">
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
</template>

<script>


export default {
  name: "aboutIndex",
  data(){
    return {
      url: '/img/logo.svg',
      itemsPerPage: 10, // Jumlah item per halaman
      currentPage: 1, // Halaman saat ini
      section: [
        {id:1, no: 1, titleSection: "Explore our programs to shape your body", button:"book now" },
      ],
      benefit: [
        {id:1, no:1, photo:'/img/table/photo1.png', title:"Cardio & Strenght Classes", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus dui, rhoncrut efficitur ac, varius at ante.", button:"View More"}
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
      return this.benefit.slice(startIndex, endIndex);
    },
    totalPages2() {
      return Math.ceil(this.benefit.length / this.itemsPerPage);
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
  }
}
</script>

<style scoped>

</style>