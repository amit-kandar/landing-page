window.onscroll = function () {
    const navbar = document.querySelector(".nav-bar")
    const logobg = document.querySelector(".brand-logo")
    const logo = document.querySelector(".brand-logo").firstElementChild
    const logo_name = document.querySelector(".logo-name")
    const signup = document.querySelector(".active")
    const signin = document.querySelector(".sign-in")
    const menu = document.querySelectorAll(".menu div")
    const menubar = document.querySelector(".nav-items")

    if (window.pageYOffset > 30) {
        navbar.classList.add("sticky")
        logobg.style.backgroundColor = "#3056d3"
        logo.style.color = "#fff"
        logo_name.style.color = "#090e34"
        document.querySelectorAll(".nav-links").forEach((e) => {
            e.classList.add("nav-links-a")
        })
        signup.classList.add("sign-up")
        signin.classList.add("signin")
        menu.forEach(div=>{
            div.style.backgroundColor = "#3056d3"
        })
        menubar.style.backgroundColor = "#fff"
    } else {
        navbar.classList.remove("sticky")
        logobg.style.backgroundColor = "#fff"
        logo.style.color = "#3056d3"
        logo_name.style.color = "#fff"
        document.querySelectorAll(".nav-links").forEach((e) => {
            e.classList.remove("nav-links-a")
        })
        signup.classList.remove("sign-up")
        signin.classList.remove("signin")
        menu.forEach(div=>{
            div.style.backgroundColor = "#fff"
        })
        menubar.style.backgroundColor = "#3056d3"
    }
}

for (let index = 1; index <= 4; index++) {
    let card = document.getElementById(`card${index}`);
    let box = document.getElementById(`innerbox${index}`);

    card.addEventListener("mouseover", () => {
        box.style.transform = "rotate(45deg)";
    });
    card.addEventListener("mouseout", () => {
        box.style.transform = "rotate(25deg)";
    });
}

for (let index = 1; index <= 6; index++) {
    let targetIcon = document.getElementById(`iconBackground${index}`);
    let targetHidden = document.getElementById(`hiddenitems${index}`).classList;

    targetIcon.addEventListener("click", () => {
        if (targetIcon.firstElementChild.classList[1] === "fa-angle-down") {
            targetIcon.firstElementChild.classList.replace("fa-angle-down", "fa-angle-up")
            targetHidden.replace("hidden-items", "display-items");
        } else {
            targetIcon.firstElementChild.classList.replace("fa-angle-up", "fa-angle-down")
            targetHidden.replace("display-items", "hidden-items");
        }
    })
}

const navslide = () => {
    const menu = document.querySelector(".menu")
    const nav = document.querySelector(".nav-items")
    const leftside = document.querySelectorAll(".left-side ul li")
    const rightside = document.querySelectorAll( ".right-side a")
    let time = 0

    menu.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
        leftside.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.4}s`
                time = index / 7 + 0.4
            }
        })
        rightside.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0. + time}s`
            }
        })
        menu.classList.toggle("toggle")
    })


    
}

navslide()