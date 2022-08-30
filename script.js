function changeCss() {
    if (this.scrollY > 70) {
        document.getElementsByClassName("nav-bar")[0].style.padding =
            "15px 95px 15px 95px";
        document.getElementsByClassName("nav-bar")[0].style.backgroundColor =
            "#FFFFFFCC";
        document.getElementsByClassName("nav-bar")[0].style.backdropFilter =
            "blur(5px)";
        document.getElementsByClassName(
            "logo"
        )[0].firstElementChild.style.backgroundColor = "#3056d3";
        document.getElementsByClassName(
            "logo"
        )[0].firstElementChild.firstElementChild.style.color = "#fff";
        document.getElementsByClassName("logo")[0].lastElementChild.style.color =
            "#090E34";

        // for nav links
        let n =
            document.getElementsByClassName("nav-items")[0].firstElementChild
                .childElementCount;
        for (let i = 0; i < n; i++) {
            let target =
                document.getElementsByClassName("nav-items")[0].firstElementChild
                    .children[i];
            target.addEventListener("mouseover", () => {
                target.style.color = "#3056d3";
            });
            target.addEventListener("mouseout", () => {
                target.style.color = "#090E34";
            });
            if (i === 0) {
                target.style.color = "#3056d3";
                target.addEventListener("mouseout", () => {
                    target.style.color = "#3056d3";
                });
            } else {
                target.style.color = "#090E34";
            }
        }

        // Sign In
        let signin = document.getElementsByClassName("sign-in")[0];
        signin.style.color = "#090E34";
        signin.addEventListener("mouseover", () => {
            signin.style.color = "#3056d3";
        });
        signin.addEventListener("mouseout", () => {
            signin.style.color = "#090E34";
        });

        // Sign Up
        let signup = document.getElementsByClassName("active")[0];
        signup.style.color = "#fff";
        signup.style.backgroundColor = "#3056d3";
        signup.addEventListener("mouseover", () => {
            signup.style.color = "#fff";
            signup.style.backgroundColor = "#090E34";
        });
        signup.addEventListener("mouseout", () => {
            signup.style.backgroundColor = "#fff";
            signup.style.backgroundColor = "#3056d3";
        });
    } else {
        document.getElementsByClassName("nav-bar")[0].style.padding =
            "25px 95px 25px 95px";
        document.getElementsByClassName("nav-bar")[0].style.backgroundColor =
            "#3056d3";
        document.getElementsByClassName(
            "logo"
        )[0].firstElementChild.style.backgroundColor = "#fff";
        document.getElementsByClassName(
            "logo"
        )[0].firstElementChild.firstElementChild.style.color = "#3056d3";
        document.getElementsByClassName("logo")[0].lastElementChild.style.color =
            "#fff";

        // for nav links
        let n =
            document.getElementsByClassName("nav-items")[0].firstElementChild
                .childElementCount;
        for (let i = 0; i < n; i++) {
            let target =
                document.getElementsByClassName("nav-items")[0].firstElementChild
                    .children[i];
            target.addEventListener("mouseover", () => {
                target.style.color = "#e5e7eb";
            });
            target.addEventListener("mouseout", () => {
                target.style.color = "#fff";
            });
            if (i === 0) {
                target.style.color = "#e5e7eb";
                target.addEventListener("mouseout", () => {
                    target.style.color = "#e5e7eb";
                });
            } else {
                target.style.color = "#fff";
            }
        }

        // Sign In
        let signin = document.getElementsByClassName("sign-in")[0];
        signin.style.color = "#fff";
        signin.addEventListener("mouseover", () => {
            signin.style.color = "#e5e7eb";
        });
        signin.addEventListener("mouseout", () => {
            signin.style.color = "#fff";
        });

        // Sign Up
        let signup = document.getElementsByClassName("active")[0];
        signup.style.color = "#fff";
        signup.style.backgroundColor = "rgba(199, 208, 255, 0.26)";
        signup.addEventListener("mouseover", () => {
            signup.style.backgroundColor = "#fff";
            signup.style.color = "#090E34";
        });
        signup.addEventListener("mouseout", () => {
            signup.style.backgroundColor = "rgba(199, 208, 255, 0.26)";
            signup.style.color = "#fff";
        });
    }
}

window.addEventListener("scroll", changeCss, false);

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