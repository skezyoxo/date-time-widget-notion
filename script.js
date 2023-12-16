function updateTimeAndDate() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var timeString = hours + ":" + minutes + ":" + seconds;

    var date = now.toDateString();

    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = date;

    setTimeout(updateTimeAndDate, 1000);
}

window.onload = updateTimeAndDate;
