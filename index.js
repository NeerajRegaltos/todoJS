let date = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("day").textContent = weekDays[date.getDay()];


document.getElementById("fullDate").textContent = `${date.getUTCMonth() + 1}-${date.getDate()}-${date.getFullYear()}`



let arr = [];
let addBtn = document.getElementById("addBtn");
let todoText = document.getElementById("input");
let list = document.getElementById("list");
let num = document.getElementById("num");


addBtn.addEventListener("click", function (e) {
    let text = todoText.value.trim();

    if (text.length !== 0) {
        document.getElementById("para").innerText = "";
        arr.push(`<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span> ${todoText.value} <span class="edit giveMeId" onclick="editMe(this.id)"><i class="fa-solid fa-pencil"></i> </span></li>`);
        todoText.value = "";

        list.innerHTML = "";
        num.textContent = arr.length;
        for (let i = 0; i < arr.length; i++) {
            list.innerHTML += arr[i];
            document.getElementsByClassName("getId")[i].setAttribute("id", i);
            document.getElementsByClassName("giveMeId")[i].setAttribute("id", i);
        }

    } else {
        document.getElementById("para").innerText = "Please Enter some text";

    }

    e.preventDefault();
});


function trashCan(clickedId) {
    console.log("trash", clickedId)
    arr.splice(clickedId, 1);

    list.innerHTML = "";
    num.textContent = arr.length;
    for (let i = 0; i < arr.length; i++) {
        list.innerHTML += arr[i];
        document.getElementsByClassName("getId")[i].setAttribute("id", i);
        document.getElementsByClassName("giveMeId")[i].setAttribute("id", i);

    }
}



function editMe(clickedId) {
    let t = document.getElementById(clickedId).parentElement.innerText;

    document.getElementById(clickedId).parentElement.innerHTML = `<input type='text' value='${t}' id=${clickedId} autocomplete="off" >`;

    document.getElementById(clickedId).addEventListener("change", function () {

        if (document.getElementById(clickedId).value.trim().length !== 0) {
            arr[clickedId] = `<li class="li"><span class="trash getId" onclick="trashCan(this.id)"><i class="fa-solid fa-trash"></i></span> ${this.value} <span class="edit giveMeId" onclick="editMe(this.id)"><i class="fa-solid fa-pencil"></i> </span></li>`;

            document.getElementById("para").innerText = "";
            list.innerHTML = "";
            num.textContent = arr.length;
            for (let i = 0; i < arr.length; i++) {
                list.innerHTML += arr[i];
                document.getElementsByClassName("getId")[i].setAttribute("id", i);
                document.getElementsByClassName("giveMeId")[i].setAttribute("id", i);

            }

        } else {
            document.getElementById("para").innerText = "Please Enter some text";
        }

    })
}


