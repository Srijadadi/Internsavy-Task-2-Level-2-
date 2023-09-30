const targetDate = new Date('2023-12-31T00:00:00'); // Replace with your target date and time
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        countdownElement.textContent = 'Countdown expired!';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown(); // Initial call
const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
