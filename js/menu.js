let show = true; 

const menuMobile = document.querySelector(".menu-mobile")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuMobile.classList.toggle("on", show)
    show = !show;
})