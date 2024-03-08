// Get all input fields
const inputs = document.querySelectorAll('input[type="text"]');

// Add event listener to each input field
inputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');

        // If the input field is empty, set it to 0
        if (this.value === '0') {
            this.value = '';
        }
    });
});

let timerInterval;
let timerSpeed = 1000; // Default speed: 1 second

function startTimer() {
    const hours1 = document.getElementById('hours1');
    const hours2 = document.getElementById('hours2');
    const minutes1 = document.getElementById('minutes1');
    const minutes2 = document.getElementById('minutes2');
    const seconds1 = document.getElementById('seconds1');
    const seconds2 = document.getElementById('seconds2');

    let hours = parseInt(hours1.value + hours2.value);
    let minutes = parseInt(minutes1.value + minutes2.value);
    let seconds = parseInt(seconds1.value + seconds2.value);

    let totalTime = hours * 3600 + minutes * 60 + seconds;

    if (totalTime <= 0) {
        alert('Please enter a time greater than 0 seconds.');
        return;
    }

    clearInterval(timerInterval); // Clear existing interval

    timerInterval = setInterval(() => {
        totalTime--;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Time\'s up!';
            return;
        }

        hours = Math.floor(totalTime / 3600);
        minutes = Math.floor((totalTime % 3600) / 60);
        seconds = totalTime % 60;

        hours1.value = Math.floor(hours / 10);
        hours2.value = hours % 10;
        minutes1.value = Math.floor(minutes / 10);
        minutes2.value = minutes % 10;
        seconds1.value = Math.floor(seconds / 10);
        seconds2.value = seconds % 10;
    }, timerSpeed);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function clearTimer() {
    clearInterval(timerInterval);
    document.getElementById('hours1').value = '0';
    document.getElementById('hours2').value = '0';
    document.getElementById('minutes1').value = '0';
    document.getElementById('minutes2').value = '0';
    document.getElementById('seconds1').value = '0';
    document.getElementById('seconds2').value = '0';
    document.getElementById('timer').textContent = '';
}
