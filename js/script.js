let searchBtn = document.getElementById("search-btn")
let searchForm = document.querySelector(".search-form")

searchBtn.onclick = function () {
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
    shopForm.classList.remove("active")
}

let cartBtn = document.getElementById("cart-btn")
let shopForm = document.querySelector(".cart-items-container")

cartBtn.onclick = function () {
    shopForm.classList.toggle("active")
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
}

let menuBtn = document.getElementById("menu-btn")
let navbar = document.querySelector(".navbar")

menuBtn.onclick = function () {
    navbar.classList.toggle("active")
    shopForm.classList.remove("active")
    searchForm.classList.remove("active")
}

window.onscroll = () => {
    shopForm.classList.remove("active")
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
}

