const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const mobilMenu = document.querySelector(".mobile-menu")

navEmail.addEventListener("click", toggleDesktopMenu)
burguerMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobilMenu.classList.toggle("inactive")
}