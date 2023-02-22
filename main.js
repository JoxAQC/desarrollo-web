const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const mobilMenu = document.querySelector(".mobile-menu")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".product-detail")

navEmail.addEventListener("click", toggleDesktopMenu)
burguerMenu.addEventListener("click", toggleMobileMenu)
cartIcon.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    shoppingCart.classList.add("inactive")
    mobilMenu.classList.toggle("inactive")
}

function toggleShoppingCart(){
    mobilMenu.classList.add("inactive")
    shoppingCart.classList.toggle("inactive")
}