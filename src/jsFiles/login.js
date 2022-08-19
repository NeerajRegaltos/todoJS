let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", (e) => {
    if (!inp2.value.trim().length) {
        para.innerText = "Please Enter Password";
    } else if (!inp1.value.trim().length) {
        para.innerText = "Please Enter Email Id";
    }
    else {
        if (inp1.value.trim().toLowerCase() !== sessionStorage.getItem("email")) {
            para.innerText = "Email is not Registered";
        } else {
            if (inp2.value !== sessionStorage.getItem("password")) {
                para.innerText = "Password does not match with Registed Password";
            } else {
                sessionStorage.setItem("LogIn", true);
                window.location = "./main.html";
            }
        }
    }
    e.preventDefault();
})