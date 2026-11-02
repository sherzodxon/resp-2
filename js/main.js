const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav")
hamburger.addEventListener("click",function(){
    if (hamburger.textContent=="Ochish") {
        hamburger.textContent="Yopish"
    }
    else{
        hamburger.textContent="Ochish"
    }
    nav.classList.toggle("header__nav--open")
})