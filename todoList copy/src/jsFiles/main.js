
if (sessionStorage.getItem("LogIn") == false || sessionStorage.getItem("LogIn") == null) {
    window.location = "./index.html";
}


let userEmail = sessionStorage.getItem("email");
let userDetail = JSON.parse(localStorage.getItem(userEmail));
let arr = userDetail.todos;


let addBtn = document.getElementById("addBtn");
let todoText = document.getElementById("input");
let list = document.getElementById("list");
let num = document.getElementById("num");


function displayTodoItems(arr) {
    for (let j = 0; j < arr.length; j++) {
        num.innerText = arr.length;
        list.innerHTML += arr[j];
        document.getElementsByClassName("getId")[j].setAttribute("id", j);
        document.getElementsByClassName("giveMeId")[j].setAttribute("id", j);
    }
}

function insertIntoLocalStorage(userEmail, userDetail) {
    let user = { "username": userDetail.username, "password": userDetail.password, "todos": arr };
    localStorage.setItem(userEmail, JSON.stringify(user));
}

displayTodoItems(arr);


//Add
addBtn.addEventListener("click", function (e) {
    let text = todoText.value.trim();

    if (text.length !== 0) {
        document.getElementById("para").innerText = "";
        list.innerHTML = "";
        arr.push(`<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span>${todoText.value}<span class="edit giveMeId" onclick="editMe(this.id)"><i class="fa-solid fa-pencil"></i> </span></li>`);

        insertIntoLocalStorage(userEmail, userDetail);
        displayTodoItems(arr);
        todoText.value = "";
    } else {
        document.getElementById("para").innerText = "Please Enter some text";
    }

    e.preventDefault();
});


//Delete 
function trashCan(clickedId) {

    list.innerHTML = "";
    console.log("trash", clickedId)
    arr.splice(clickedId, 1);
    insertIntoLocalStorage(userEmail, userDetail);
    num.innerText = arr.length;
    displayTodoItems(arr);
}


//Edit
function editMe(clickedId) {
    let t = document.getElementById(clickedId).parentElement.innerText;
    document.getElementById(clickedId).parentElement.innerHTML = `<input type='text' value='${t}' id=${clickedId} autocomplete="off">`;


    document.getElementById(clickedId).addEventListener("change", function () {
        if (document.getElementById(clickedId).value.trim().length !== 0) {
            arr[clickedId] = `<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span> ${this.value} <span class="edit giveMeId" onclick="editMe(this.id)"><i class="fa-solid fa-pencil"></i> </span></li>`;
            insertIntoLocalStorage(userEmail, userDetail);
            document.getElementById("para").innerText = "";
            list.innerHTML = "";

            displayTodoItems(arr);

        } else {
            document.getElementById("para").innerText = "Please Enter some text";
        }
    })

}




//rendering Username
const username = userDetail.username;
document.getElementById("username").innerText = username;

//Logout
let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
    sessionStorage.setItem("LogIn", false);
    window.location = "./index.html";
});