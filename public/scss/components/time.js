//reference from https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak

const timer = document.getElementById('stopwatch');
var hour = 0;
var mins = 0;
var s = 0;
var stoptime = true;

function start() {
  if (stoptime == true) {
        stoptime = false;
        timerloop();
    }
}
function stop() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerloop() {
    if (stoptime == false) {
    s = parseInt(s);
    mins = parseInt(mins);
    hour = parseInt(hour);
 /*the conversion of hours, mins and second */
    s = s + 1;
    if (s == 60) {
      mins = mins + 1;
      s = 0;
    }
    if (mins == 60) {
      hour = hour + 1;
      mins = 0;
      s = 0;
    }

    if (s < 10 || s == 0) {
        s = '0' + s;
    }
    if (mins < 10 || mins == 0) {
        mins = '0' + mins;
    }
    if (hour < 10 || hour == 0) {
        hour = '0' + hour;
    }

    timer.innerHTML = hour + ':' + mins + ':' + s;

    setTimeout("timerloop()", 1000);
  }
}

function reset() {
    timer.innerHTML = '00:00:00'; /*reset and clean the time tracker */
    stoptime = true;
    hour = 0;
    s = 0;
    mins = 0;
}
