<template>
    <p class="title-font fs-1 text-uppercase text-center">membership register</p>
    <div class="d-flex flex-column login-content-wrapper gap-5">
      <div class="row gy-4 w-100">
        <div class="col-md-6 col-12">
          <div class="d-flex flex-column">
            <p class="text-white">First Name:</p>
            <input-text input_type="text" :placeholder="'Enter First Name'"  class="mt-3"/>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="d-flex flex-column">
            <p class="text-white">Last Name:</p>
            <input-text input_type="text" :placeholder="'Enter First Name'"  class="mt-3"/>
          </div>
        </div>
        <div class="col-md-5 col-12">
          <div class="d-flex flex-column">
            <p class="text-white">Phone Number:</p>
            <input-text input_type="tel" :placeholder="'Enter Your Phone Number'"  class="mt-3"/>
          </div>
        </div>
        <div class="col-md-7 col-12">
          <div class="d-flex flex-column">
            <p class="text-white">Email:</p>
            <input-text input_type="text" :placeholder="'Enter Your Email'"  class="mt-3"/>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex flex-column">
            <p class="text-white">Password:</p>
            <input-text input_type="password" :placeholder="'Enter Your Password'"  class="mt-3"/>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="d-flex flex-column">
            <p class="text-white text-capitalize">Select Membership:</p>
            <div>
              <div class="custom-select mt-3" style="width:200px;">
                <select>
                  <option value="1">1 month</option>
                  <option value="2">3 month</option>
                  <option value="3">6 month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="d-flex flex-column">
            <div class="d-flex flex-column">
              <p class="text-white text-capitalize">Select Membership:</p>
              <div class="">
                <input type="file" id="file-input" class="text-white mt-3 input-file-auth">
              </div>
            </div>
          </div>
        </div>
      </div>



      <div class="d-flex flex-md-row flex-column gap-4 align-items-center">
        <button class="btn btn-color btn-auth w-100" style="max-width: 400px !important;">Join Membership Now</button>
        <p class="text-white ">
          Don’t have account? <span><router-link :to="{name:'register'}" class="main-color link-text">Register</router-link></span>
        </p>

      </div>
    </div>
  </template>




<script>
import InputText from "@/components/inputText.vue";


export default {
  name: "registerPage",
  components: {InputText},
  mounted() {
    let x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
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
      y = document.getElementsByClassName("select-selected");
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