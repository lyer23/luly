// Variables del juego
let numeroSecreto = Math.floor(Math.random() * 100) + 1;  // Número secreto entre 1 y 100
let intentos = 0;

// Referencias a elementos HTML
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');
const buttonContainer = document.getElementById('buttonContainer'); // Contenedor del botón
const meteteBtn = document.getElementById('meteteBtn'); // Botón "Métete"

// Función que se ejecuta cuando el jugador hace una adivinanza
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);  // Obtener el número del input
    intentos++;

    if (guess < numeroSecreto) {
        message.textContent = '¡Muy bajo! Intenta con un número más alto.';
    } else if (guess > numeroSecreto) {
        message.textContent = '¡Muy alto! Intenta con un número más bajo.';
    } else {
        message.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
        guessBtn.disabled = true;  // Desactivar el botón después de ganar
        
        // Mostrar el botón "Métete"
        buttonContainer.style.display = 'block';
    }

    attempts.textContent = `Intentos: ${intentos}`;
});

// Redirigir al hacer clic en el botón "Métete"
meteteBtn.addEventListener('click', function() {
    window.location.href = 'premio.html'; // Redirige a premio.html
});
