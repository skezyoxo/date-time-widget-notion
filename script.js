function updateTimeAndDate() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');

    // Convert to 12-hour format
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

    var date = now.toDateString();

    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = date;

    setTimeout(updateTimeAndDate, 1000);
}

window.onload = updateTimeAndDate;
