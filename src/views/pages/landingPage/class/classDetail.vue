<template>
  <div class="px-5 pt-5 mb-5">
    <div class="d-flex flex-column">
      <div class="d-flex flex-row justify-content-between">
        <p class="title-font fs-3 text-uppercase">Cardio & Strenght Classes - Schedule</p>
        <button class="btn btn-color" @click="showModalAdd">Add Schedule</button>
      </div>
      <div class="mt-4">
        <div class="card-dashboard-wrapper p-4">
          <table class="table w-100">
            <thead>
            <tr>
              <th>No</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in paginatedData1" :key="index">
              <td>{{item.no}}</td>
              <td>{{item.day}}</td>
              <td>{{item.startTime}}</td>
              <td>{{item.endTime}}</td>
              <td class="d-flex flex-row gap-2">
                <button class="btn border-0 p-0" @click="showModalEdit(item)">
                  <img src="/img/table/detail-icon.svg" draggable="false" class="icon-table">
                </button>
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
  <modal-component title="Add Schedule" modal-id="addModalSchedule" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Day</p>
        <div class="custom-select-modal mt-3">
          <select>
            <option value="0">Select Day</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Start Date</p>
        <input type="time" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">End Date</p>
        <input type="time" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Add Schedule</button>
    </div>
  </modal-component>
  <modal-component title="Edit Schedule" modal-id="editModalSchedule" >
    <hr class="hr-form mt-4">
    <form class="modal-form-wrapper d-flex flex-column gap-4 mt-2">
      <div class="d-flex flex-column">
        <p class="input-title">Day</p>
        <div class="custom-select-modal mt-3">
          <select>
            <option value="0">Select Day</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
        </div>
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">Start Date</p>
        <input type="time" class="form-input">
      </div>
      <div class="d-flex flex-column">
        <p class="input-title">End Date</p>
        <input type="time" class="form-input">
      </div>
    </form>
    <hr class="hr-form mt-4">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button class="btn btn-color-modal">Edit Schedule</button>
    </div>
  </modal-component>
  <delete-modal title="Delete Schedule" modal-id="deleteModal">
    <hr class="hr-form">
    <p class="delete-desc fw-medium">
      Are you sure you want to delete this schedule table? The process cannot be undo
    </p>
    <hr class="hr-form">
    <div class="d-flex flex-row mt-2 justify-content-end gap-3">
      <button class="btn btn-close-modal">Cancel</button>
      <button type="button" class="btn btn-danger-modal">Delete Schedule</button>
    </div>
  </delete-modal>
</template>

<script>
import ModalComponent from "@/components/modalComponent.vue";
import DeleteModal from "@/components/deleteModal.vue";

export default {
  name: "classDetail",
  components: {DeleteModal, ModalComponent},
  data(){
    return {
      url: '/img/logo.svg',
      itemsPerPage: 10, // Jumlah item per halaman
      currentPage: 1, // Halaman saat ini
      schedule: [
        {id:1, no:1, day:'Monday', startTime:"19.00", endTime:"20.00"}
      ],
      modalStatus: false,
      idAchievement:''
    }
  },
  computed: {
    paginatedData1() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.schedule.slice(startIndex, endIndex);
    },
    totalPages1() {
      return Math.ceil(this.schedule.length / this.itemsPerPage);
    },
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
      $("#addModalSchedule").modal("show");
    },
    showModalEdit(item){
      this.modalStatus=true
      $("#editModalSchedule").modal("show");
      this.achievements.icon = item.icon
      this.achievements.number = item.number
      this.achievements.description = item.description
    },
    showModalDelete(achievementId){
      $("#deleteModal").modal("show");
      this.idAchievement = achievementId
      console.log(this.idAchievement)
    }
  },
  mounted (){
    let x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select-modal");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected-modal");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          let y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      let x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected-modal");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
  }
}
</script>

<style scoped>

</style>