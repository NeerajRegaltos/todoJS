(function () {
    let date = new Date();
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("day").textContent = weekDays[date.getDay()];


    document.getElementById("fullDate").textContent = `${date.getUTCMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

})();
