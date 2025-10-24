// Selección de elementos
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Variable del contador
let count = 0;

// Event Listeners
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

// Función para incrementar
function increment() {
    count++;
    updateDisplay();
}

// Función para decrementar
function decrement() {
    count--;
    updateDisplay();
}

// Función para resetear
function reset() {
    count = 0;
    updateDisplay();
}

// Función para actualizar el display
function updateDisplay() {
    counterDisplay.textContent = count;
    updateColor();
}

// Función para actualizar el color
function updateColor() {
    // Remover todas las clases de color
    counterDisplay.classList.remove('positive', 'negative', 'zero');
    
    // Agregar la clase correspondiente
    if (count > 0) {
        counterDisplay.classList.add('positive');
    } else if (count < 0) {
        counterDisplay.classList.add('negative');
    } else {
        counterDisplay.classList.add('zero');
    }
}

// Inicializar
updateColor();