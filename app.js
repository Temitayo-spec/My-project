const hamburger = document.querySelector(".ham");
const close = document.querySelector(".close");

hamburger.addEventListener('click', () => {
    document.querySelector("nav").style.display = "block";
    hamburger.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", () => {
    document.querySelector("nav").style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
})