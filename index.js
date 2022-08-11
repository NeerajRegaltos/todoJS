let date = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").textContent = weekDays[date.getDay()];


document.getElementById("fullDate").textContent = `${date.getUTCMonth() + 1}-${date.getDate()}-${date.getFullYear()}`



let arr = [];
let addBtn = document.getElementById("addBtn");
let todoText = document.getElementById("input");
let list = document.getElementById("list");
let num = document.getElementById("num");


function optimizedFunc() {
    list.innerHTML = "";
    num.textContent = arr.length;
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += arr[i];
        document.getElementsByClassName("getId")[i].setAttribute("id", i);
    }
}

addBtn.addEventListener("click", function (e) {
    let text = todoText.value.trim();

    if (text.length !== 0) {
        document.getElementById("para").innerText = "";
        arr.push(`<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span> ${todoText.value} </li>`);
        todoText.value = "";

        optimizedFunc();

    } else {
        document.getElementById("para").innerText = "Please Enter some text";

    }

    e.preventDefault();

});


function trashCan(clickedId) {
    console.log(clickedId)
    arr.splice(clickedId, 1);

    optimizedFunc();
}








