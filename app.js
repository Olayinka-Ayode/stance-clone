const menu = document.querySelector(".ham-menu");
const menuTop = document.querySelector(".top");
const menuMid = document.querySelector(".mid");
const menuBottom = document.querySelector(".bottom");
const hiddenDropdown = document.querySelector(".hidden-dropdown")

function clickEd(){
    menuTop.classList.toggle("top-clicked");
    menuMid.classList.toggle("mid-clicked");
    menuBottom.classList.toggle("bottom-clicked");
    hiddenDropdown.classList.toggle("hidden-dropdown-show");
}

menu.addEventListener("click", clickEd)