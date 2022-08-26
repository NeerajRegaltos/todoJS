let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");
let btn = document.getElementById("btn");
let para = document.getElementById("para");


inp1.addEventListener("input", function () {

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

            const storageKeys = Object.keys(localStorage);
            let emailPresent = storageKeys.includes(inp4.value.trim().toLowerCase());

            if (emailPresent) {
                para.innerText = "Email is already registered, Please use another Email";
            } else {
                let userThings = JSON.stringify({ username: inp1.value.trim(), password: inp2.value, todos: [] });
                localStorage.setItem(inp4.value.trim().toLowerCase(), userThings);
                window.location = "./login.html"
            }
        }
    }
    e.preventDefault();
})