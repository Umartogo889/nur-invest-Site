const burger = document.getElementById("burger")
const BackBtn = document.getElementById("back-btn")
const Menu = document.getElementById("hed_item")

function showMenu() {
    Menu.classList.add("toggle")
}

function hideMenu() {
    Menu.classList.remove("toggle")
}

burger.addEventListener("click", showMenu)
BackBtn.addEventListener("click", hideMenu)