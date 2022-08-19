let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
let btn = document.getElementById("btn");
let para = document.getElementById("para");

inp1.addEventListener("input", function () {
    console.log(this.value.trim().length)
    if (this.value.trim().length > 24) {
        inp1.setAttribute("onkeypress", "return false");
    } else {
        inp1.removeAttribute("onkeypress")
    }
});

btn.addEventListener("click", (e) => {
    if (!inp1.value.trim().length) {
        para.innerText = "Please Enter Username";
    } else if (!inp2.value.trim().length) {
        para.innerText = "Please Enter Password";
    } else if (!inp3.value.trim().length) {
        para.innerText = "Please Enter Confirm Password";
    } else if (!inp4.value.trim().length) {
        para.innerText = "Please Enter Email Id";
    }
    else {
        if (inp2.value !== inp3.value) {
            para.innerText = "Password Do not Match with confirm Password";
        } else {
            if (inp4.value.trim().toLowerCase() === sessionStorage.getItem("email")) {
                para.innerText = "Email is already registered, Please use another Email";
            } else {
                sessionStorage.setItem("email", inp4.value.trim().toLowerCase())
                sessionStorage.setItem("password", inp2.value);
                sessionStorage.setItem("username", inp1.value);
                window.location = "./login.html"
            }
        }
    }
    e.preventDefault();
})