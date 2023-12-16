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

    // Formatting the date as "Day, DD Month"
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[now.getDay()];
    var date = now.getDate();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthName = months[now.getMonth()];

    var dateString = dayName + ", " + date + " " + monthName;

    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = dateString;

    setTimeout(updateTimeAndDate, 1000);
}

window.onload = updateTimeAndDate;
