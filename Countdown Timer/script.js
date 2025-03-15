document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const startBtn = document.getElementById("start");
    const pauseBtn = document.getElementById("pause");
    const resetBtn = document.getElementById("reset");
    const inputField = document.getElementById("time-input");

    let countdown;
    let timeRemaining;
    let isPaused = false;

    function startCountdown() {
        if (countdown) clearInterval(countdown);

        let inputTime = parseInt(inputField.value) * 60; // Convert minutes to seconds
        if (isNaN(inputTime) || inputTime <= 0) {
            alert("Please enter a valid time in minutes.");
            return;
        }

        timeRemaining = inputTime;
        updateDisplay(timeRemaining);

        countdown = setInterval(() => {
            if (!isPaused && timeRemaining > 0) {
                timeRemaining--;
                updateDisplay(timeRemaining);
            }
            if (timeRemaining === 0) {
                clearInterval(countdown);
                playAlarm();
            }
        }, 1000);
    }

    function updateDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        display.textContent = `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }

    function pauseCountdown() {
        isPaused = !isPaused;
        pauseBtn.textContent = isPaused ? "Resume" : "Pause";
    }

    function resetCountdown() {
        clearInterval(countdown);
        display.textContent = "00:00";
        inputField.value = "";
        isPaused = false;
        pauseBtn.textContent = "Pause";
    }

    function playAlarm() {
        const alarm = new Audio("alarm.mp3"); // Add an alarm sound file
        alarm.play();
    }

    startBtn.addEventListener("click", startCountdown);
    pauseBtn.addEventListener("click", pauseCountdown);
    resetBtn.addEventListener("click", resetCountdown);
});