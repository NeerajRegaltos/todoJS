console.log(sessionStorage.getItem("LogIn"))
if (sessionStorage.getItem("LogIn") == "false" || sessionStorage.getItem("LogIn") == null) {
    window.location = "./index.html";
}
const arr = [];
let addBtn = document.getElementById("addBtn");
let todoText = document.getElementById("input");
let list = document.getElementById("list");
let num = document.getElementById("num");

function displayTodoItems() {
    for (let j = 0; j < 100; j++) {
        num.innerText = localStorage.length;
        if (localStorage.getItem(j) !== null) {
            list.innerHTML += localStorage.getItem(j);
            arr[j] = localStorage.getItem(j);
            document.getElementsByClassName("getId")[j].setAttribute("id", j);
            document.getElementsByClassName("giveMeId")[j].setAttribute("id", j);
        }
    }
}

displayTodoItems();

function insertItem(arr) {
    localStorage.clear()
    for (let i = 0; i < arr.length; i++) {
        localStorage.setItem(i, arr[i]);
    }
}


//Add
addBtn.addEventListener("click", function (e) {
    let text = todoText.value.trim();

    if (text.length !== 0) {
        document.getElementById("para").innerText = "";
        list.innerHTML = "";
        arr.push(`<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span>${todoText.value}<span class="edit giveMeId" onclick="editMe(this.id)"><i class="fa-solid fa-pencil"></i> </span></li>`);

        insertItem(arr);
        displayTodoItems();

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

    insertItem(arr);
    displayTodoItems();
}


//Edit

function editMe(clickedId) {
    let t = document.getElementById(clickedId).parentElement.innerText;
    document.getElementById(clickedId).parentElement.innerHTML = `<input type='text' value='${t}' id=${clickedId} autocomplete="off">`;
    

    document.getElementById(clickedId).addEventListener("change", function () {

        if (document.getElementById(clickedId).value.trim().length !== 0) {
            arr[clickedId] = `<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span> ${this.value} <span class="edit giveMeId" onclick="editMe(this.id)"><i class="fa-solid fa-pencil"></i> </span></li>`;

            document.getElementById("para").innerText = "";
            list.innerHTML = "";

            insertItem(arr);
            displayTodoItems();

        } else {
            document.getElementById("para").innerText = "Please Enter some text";
        }
    })
}




//rendering Username
const username = sessionStorage.getItem("username");
document.getElementById("username").innerText = username;

//Logout
let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
    sessionStorage.setItem("LogIn", false);
    window.location = "./index.html";
});