document.addEventListener("DOMContentLoaded", function () {
    let startTime = 0;
    let intervalId;

    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    const millisecondsDisplay = document.getElementById("milliseconds");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);

    function startTimer() {
        if (!intervalId) {
            startTime = Date.now() - (startTime - Date.now());
            intervalId = setInterval(updateTimer, 10);
            startButton.disabled = true;
            stopButton.disabled = false;
        }
    }

    function stopTimer() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            startButton.disabled = false;
            stopButton.disabled = true;
        }
    }

    function resetTimer() {
        stopTimer();
        startTime = 0;
        updateDisplay();
    }

    function updateTimer() {
        const elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = (elapsedTime % 1000).toString().slice(0, 3);

        minutesDisplay.textContent = padZero(minutes);
        secondsDisplay.textContent = padZero(seconds);
        millisecondsDisplay.textContent = milliseconds;
    }

    function padZero(num) {
        return num < 10 ? "0" + num : num;
    }
});
