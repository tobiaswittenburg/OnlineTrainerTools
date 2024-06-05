var timer;
var timeLeft;

module.exports = {
    setTimer: setTimer,
    startTimer: startTimer,
    stopTimer: stopTimer
};

function setTimer(minutes) {
    timeLeft = minutes * 60;
    document.getElementById('timer').textContent = minutes + ":00";
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        timeLeft--;
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        document.getElementById('timer').textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}
