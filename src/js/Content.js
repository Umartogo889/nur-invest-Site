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


const textAbo = document.getElementById("text_abo")
const open_text = document.getElementById("open_text")

open_text.addEventListener("click", () => {
    if (textAbo.classList.contains("show_text")) {
        textAbo.classList.remove("show_text")
        open_text.textContent = "Чистать полностью"
    }
    else {
        textAbo.classList.add("show_text")
        open_text.textContent = "скрыть текст"
    }
})

const faqBtn = document.querySelectorAll(".faq-btn")

faqBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
    })
})




