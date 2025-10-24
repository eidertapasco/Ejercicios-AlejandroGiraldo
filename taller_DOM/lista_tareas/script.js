// Selección de elementos
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const errorMsg = document.getElementById('errorMsg');
const taskList = document.getElementById('taskList');

// Event Listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Función para agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Validar que no esté vacía
    if (taskText === '') {
        showError('Por favor, escribe una tarea antes de agregar.');
        return;
    }
    
    // Limpiar mensaje de error
    clearError();
    
    // Crear elemento de lista
    const li = document.createElement('li');
    li.className = 'task-item';
    
    // Crear span para el texto
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    
    // Crear botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Eliminar';
    
    // Event listener para marcar como completada
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    
    // Event listener para eliminar
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar que se active el toggle
        li.remove();
    });
    
    // Agregar elementos al li
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Agregar li a la lista
    taskList.appendChild(li);
    
    // Limpiar input
    taskInput.value = '';
    taskInput.focus();
}

// Función para mostrar error
function showError(message) {
    errorMsg.textContent = message;
}

// Función para limpiar error
function clearError() {
    errorMsg.textContent = '';
}