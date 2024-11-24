const countdownButton = document.getElementById('countdownButton');
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const targetDate = new Date('2026-08-23T00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    countdown.textContent = "¡Felicidades!";
    countdownButton.disabled = true;
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000)) / 1000);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Actualiza el temporizador cada segundo
setInterval(updateCountdown, 1000);
