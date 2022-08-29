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
        const storageKeys = Object.keys(localStorage);
        let registered = storageKeys.includes(inp1.value.trim().toLowerCase());

        if (!registered) {
            para.innerText = "Email is not Registered";
        } else {
            const registeredDetail = JSON.parse(localStorage.getItem(inp1.value.trim().toLowerCase()));
            if (registeredDetail.password !== inp2.value) {
                para.innerText = "Password is Incorrect";
            } else {
                sessionStorage.setItem("LogIn", true);
                sessionStorage.setItem("email", inp1.value.trim().toLowerCase());
                window.location = "./main.html";
            }
        }


    }
    e.preventDefault();
})
