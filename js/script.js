
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


