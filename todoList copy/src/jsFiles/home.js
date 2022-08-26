let imageBox = document.getElementById("imageBox");
let img = document.getElementById("img");
let imageArray = [];

let i = 1;
setInterval(() => {
    img.setAttribute("src", `./assets/images/img${i}.png`);
    if (i === 3) {
        i = 0;
    }
    i++;
}, 3000)


