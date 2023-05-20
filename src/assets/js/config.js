// const btnHamburger = document.querySelector('.btn-responsive');
// const sidebar = document.querySelector('.filter-product');
// const body = document.querySelector('body');
//
// btnHamburger.addEventListener('click', function(){
//     btnHamburger.classList.toggle('active');
//     sidebar.classList.toggle('active');
// });
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))


