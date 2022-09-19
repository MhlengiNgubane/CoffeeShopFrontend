let navbar = document.querySelector('nav');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remov('active');
    searchForm.classList.toggle('active');
    cartItem.classList.toggle('active');
}