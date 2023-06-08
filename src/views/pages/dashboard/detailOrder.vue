<template>
  <div class="px-5 mt-5">
    <div class="d-flex flex-row justify-content-between">
      <p class="title-font fs-3 text-uppercase">detail REQUEST Membership</p>
      <div class="d-flex flex-row gap-2 align-items-center icon-back-wrapper">
        <svg width="33" class="svg-icon" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.9828 7.75016C32.7247 6.974 32.1741 6.70665 31.3739 6.70665C22.5381 6.7239 13.7108 6.71528 4.87499 6.71528C4.75454 6.71528 4.62549 6.71528 4.42761 6.71528C4.56527 6.56867 4.65991 6.46518 4.75454 6.37894C6.13972 4.99909 7.52489 3.61924 8.91006 2.23076C9.28001 1.85993 9.40046 1.4201 9.2542 0.928525C9.11654 0.445577 8.781 0.143735 8.2906 0.031622C7.8088 -0.0718668 7.40444 0.0833657 7.0603 0.428329C5.80418 1.67882 4.54806 2.92931 3.29194 4.1798C2.35415 5.1112 1.41637 6.0426 0.487183 6.98262C-0.158083 7.62943 -0.166687 8.3711 0.487183 9.0179C2.67249 11.1998 4.84918 13.3731 7.04309 15.5463C7.62813 16.1241 8.40245 16.15 8.93587 15.6239C9.46929 15.0893 9.43487 14.2958 8.84983 13.7094C7.48187 12.3382 6.11391 10.9756 4.74594 9.61296C4.65991 9.52672 4.56527 9.45773 4.47923 9.38012C4.48783 9.35424 4.49644 9.31975 4.50504 9.29388C4.62549 9.29388 4.73734 9.29388 4.85779 9.29388C13.7022 9.29388 22.5467 9.28525 31.3911 9.3025C32.1913 9.3025 32.7419 9.03515 33 8.25899C32.9828 8.09513 32.9828 7.92265 32.9828 7.75016Z" fill="#FFFFFF"/>
        </svg>
        <p class="fw-bold">Back To Dashboard</p>
      </div>
    </div>
    <div class="mt-5 row">
      <div class="col-xl-6 col-lg-7 col-12">
        <div class="row gy-4">
          <div class="col-md-6 col-12">
            <p class="fw-bold mb-3">First Name:</p>
            <InputText :placeholder="'sulton'" :input_type="'text'" :disabled="true"></InputText>
          </div>
          <div class="col-md-6 col-12">
            <p class="fw-bold mb-3">Last Name:</p>
            <InputText :placeholder="'sulton'" :input_type="'text'" :disabled="true"></InputText>
          </div>
          <div class="col-12">
            <p class="fw-bold mb-3">Email :</p>
            <InputText :placeholder="'email'" :input_type="'email'" :disabled="true"></InputText>
          </div>
          <div class="col-md-6 col-12">
            <p class="fw-bold mb-3">Telephone Number :</p>
            <InputText :placeholder="'phone number'" :input_type="'text'" :disabled="true"></InputText>
          </div>
          <div class="col-md-6 col-12">
            <p class="fw-bold mb-3">Membership :</p>
            <InputText :placeholder="'1 month'" :input_type="'text'" :disabled="true"></InputText>
          </div>
        </div>
        <div class="mt-5">
          <div class="d-flex flex-row gap-3">
            <button class="btn btn-crud btn-green">Confirmation</button>
            <button class="btn btn-crud btn-red" data-bs-toggle="modal" data-bs-target="#exampleModal">Decline</button>
          </div>
        </div>
      </div>
      <div class="col-xl-1 d-xl-block d-none"></div>
      <div class="col-lg-5 col-12">
        <p>Proof Of Payment :</p>
        <img src="public/img/dashboard/proof-img.png" class="mt-3 h-100 w-100" alt="">
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog rounded-0">
    <div class="modal-content rounded-0">
      <div class="modal-header py-4 px-4">
        <div class="d-flex flex-row gap-2">
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20.3588C0 20.6266 0 20.8882 0 21.1559C0.0190792 21.212 0.0381546 21.2618 0.0445137 21.3178C0.184425 22.1648 0.566004 22.8871 1.20197 23.4787C1.9842 24.2073 2.93178 24.5 4.0002 24.5C9.99732 24.4938 16.0008 24.4938 21.9979 24.4938C22.1442 24.4938 22.2841 24.4938 22.4304 24.4813C23.8295 24.3755 24.8852 23.7154 25.5402 22.5073C26.2143 21.268 26.1189 20.035 25.4385 18.8082C22.3986 13.3531 19.3714 7.89172 16.3379 2.43036C16.0517 1.91349 15.6637 1.47758 15.155 1.15376C13.1898 -0.104161 10.735 0.506117 9.61574 2.53C6.81751 7.56168 4.02564 12.5934 1.23376 17.625C0.744074 18.5031 0.16535 19.3438 0 20.3588ZM14.5254 11.8087C14.5254 12.1637 14.5254 12.5186 14.5254 12.8798C14.5254 13.7579 14.5317 14.6359 14.5254 15.514C14.5126 16.5913 13.5142 17.295 12.503 16.9525C11.8734 16.7408 11.4855 16.1865 11.4855 15.4704C11.4855 13.0355 11.4855 10.6006 11.4855 8.16573C11.4855 8.05986 11.4918 7.94777 11.5109 7.84191C11.6572 7.03235 12.3949 6.50926 13.228 6.62135C13.9912 6.72722 14.5254 7.34372 14.5254 8.15327C14.5317 9.37383 14.5254 10.5882 14.5254 11.8087ZM13.0054 21.5109C12.1723 21.5171 11.4855 20.857 11.4791 20.0412C11.4727 19.2255 12.1723 18.528 13.0054 18.5342C13.8322 18.5405 14.519 19.213 14.519 20.0226C14.5254 20.8383 13.8385 21.5047 13.0054 21.5109Z" fill="#E13E3D"/>
          </svg>
          <h1 class="modal-title fs-5 text-danger fw-bold" id="exampleModalLabel">
            Are you sure?
          </h1>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-secondary">
        Are you sure you want to decline this membership request?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-red">Decline</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import InputText from '@/components/inputText.vue'
export default {
  components: { InputText },
  name: "detailOrder",
  
  
}
</script>

<style scoped>

</style>