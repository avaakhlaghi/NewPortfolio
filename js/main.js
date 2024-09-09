const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen=navLinks.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");

});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const ScrollRevealOption = {
    distance:"50px",
    origin:"buttom",
    duration:1000,
};

SrcrollReveal().reveal(".header__container img", {
    ...ScrollRevealOption,
});
SrcrollReveal().reveal(".header__container h1", {
    ...ScrollRevealOption,
    delay:500,
});
SrcrollReveal().reveal(".header__container p", {
    ...ScrollRevealOption,
    delay:1000,
});
SrcrollReveal().reveal(".header__btns", {
    ...ScrollRevealOption,
    delay:1500,
});

SrcrollReveal().reveal(".project__card", {
    ...ScrollRevealOption,
    interval:500,
});