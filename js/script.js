
const searchForm = document.querySelector('.search-form');
const singupForm = document.querySelector('.signup-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  singupForm.classList.remove('active');
}

document.querySelector('#signup-btn').onclick = () =>{
  singupForm.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
   
  // searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header-sectionT').classList.add('active');

  }else{
    document.querySelector('.header-sectionT').classList.remove('active');

  }
}
window.onload = () =>{
  if(window.scrollY > 80){
    document.querySelector('.header-sectionT').classList.add('active');

  }else{
    document.querySelector('.header-sectionT').classList.remove('active');

  }
}
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#signup-btn').onclick = () =>{

  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{

  loginForm.classList.remove('active');
}


var swiper = new Swiper(".books-slider", {
  
  loop:true,
  centeredSlider:true,
  autoplay: {
    delay:9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
