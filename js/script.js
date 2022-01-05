
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

