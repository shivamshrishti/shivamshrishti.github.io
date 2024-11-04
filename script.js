// Target date for countdown
const targetDate = new Date('2025-02-04T00:00:00');  // Update this to your target date

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById("countdown-title").textContent = "The big day is here!";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown-title").textContent = `${daysLeft} Days to go!`;
    document.title = `Shrishti ♥ Shivam | ${daysLeft} Days to go!`;
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

particlesJS.load('particles-js',
    'particles.json', function(){
      console.log("Well, welcome to the site (as well as to the console :D )");
    });

