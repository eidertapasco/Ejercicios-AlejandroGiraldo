const estudiantes = [
    { nombre: "Ana", notas: [3.5, 4.0, 3.8], proyectoEntregado: true },
    { nombre: "Luis", notas: [2.8, 3.0, 2.5], proyectoEntregado: false },
    { nombre: "María", notas: [4.5, 4.2, 4.8], proyectoEntregado: true },
    { nombre: "Carlos", notas: [3.0, 3.1, 2.9], proyectoEntregado: false },
    { nombre: "Sofía", notas: [4.0, 3.9, 4.1], proyectoEntregado: true },
    { nombre: "Diego", notas: [2.0, 2.5, 2.8], proyectoEntregado: false },
    { nombre: "Valentina", notas: [4.8, 4.9, 5.0], proyectoEntregado: true },
    { nombre: "Andrés", notas: [3.2, 3.5, 3.4], proyectoEntregado: true },
    { nombre: "Camila", notas: [3.0, 2.7, 3.1], proyectoEntregado: false },
    { nombre: "Mateo", notas: [4.1, 4.3, 4.2], proyectoEntregado: true },
    { nombre: "Juliana", notas: [2.9, 2.8, 3.0], proyectoEntregado: false },
    { nombre: "Felipe", notas: [3.7, 3.6, 3.8], proyectoEntregado: true },
    { nombre: "Isabela", notas: [4.4, 4.6, 4.7], proyectoEntregado: true },
    { nombre: "Samuel", notas: [3.3, 3.1, 3.2], proyectoEntregado: false },
    { nombre: "Laura", notas: [2.5, 2.9, 2.7], proyectoEntregado: false },
    { nombre: "Tomás", notas: [4.2, 3.9, 4.4], proyectoEntregado: true },
    { nombre: "Natalia", notas: [3.0, 3.2, 3.1], proyectoEntregado: true },
    { nombre: "Esteban", notas: [4.0, 4.1, 4.2], proyectoEntregado: true },
    { nombre: "Daniela", notas: [2.3, 2.8, 2.6], proyectoEntregado: false },
    { nombre: "Julián", notas: [3.4, 3.6, 3.5], proyectoEntregado: true },
    { nombre: "Lucía", notas: [4.8, 4.9, 4.7], proyectoEntregado: true },
    { nombre: "Sebastián", notas: [3.9, 4.0, 3.8], proyectoEntregado: true },
    { nombre: "Carolina", notas: [2.7, 2.9, 3.0], proyectoEntregado: false },
    { nombre: "Pedro", notas: [3.5, 3.7, 3.6], proyectoEntregado: true },
    { nombre: "Martina", notas: [4.1, 4.3, 4.0], proyectoEntregado: true },
    { nombre: "Gabriel", notas: [2.6, 2.5, 2.9], proyectoEntregado: false },
    { nombre: "Sara", notas: [4.0, 3.9, 4.1], proyectoEntregado: true },
    { nombre: "Nicolás", notas: [3.1, 3.2, 3.3], proyectoEntregado: true },
    { nombre: "Elena", notas: [4.5, 4.7, 4.6], proyectoEntregado: true },
    { nombre: "Pablo", notas: [2.4, 2.8, 2.7], proyectoEntregado: false }
];

// 1. Calcular el promedio de notas y agregarlo al objeto
const promedioNotas = estudiante => {
    const suma = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = suma / estudiante.notas.length;
    estudiante.promedio = Number(promedio.toFixed(2));
    return estudiante;
};

estudiantes.forEach(promedioNotas);

// 2. Filtrar estudiantes aprobados (promedio >= 3.0)
const aprobados = estudiantes.filter(e => e.promedio >= 3.0);

// 3. Buscar estudiante específico por nombre
const buscarEstudiante = nombre => estudiantes.find(e => e.nombre === nombre);
const estudianteBuscado = buscarEstudiante("María"); // Cambia el nombre si quieres buscar otro

// 4. Verificar si al menos uno no ha entregado el proyecto final
const algunoSinProyecto = estudiantes.some(e => !e.proyectoEntregado);

// 5. Función procesarEstudiantes con callback
function procesarEstudiantes(estudiantes, callback) {
    callback(estudiantes);
}

// 6. Mostrar resultados usando desestructuración
procesarEstudiantes(aprobados, lista => {
    console.log("Estudiantes aprobados:");
    lista.forEach(({ nombre, promedio }) => {
        console.log(`Nombre: ${nombre}, Promedio: ${promedio}`);
    });
});

procesarEstudiantes([estudianteBuscado], lista => {
    if (lista[0]) {
        const { nombre, promedio, proyectoEntregado } = lista[0];
        console.log(`\nEstudiante buscado: ${nombre}, Promedio: ${promedio}, Proyecto entregado: ${proyectoEntregado}`);
    } else {
        console.log("\nEstudiante no encontrado.");
    }
});

procesarEstudiantes(estudiantes, lista => {
    if (algunoSinProyecto) {
        console.log("\nAl menos un estudiante no ha entregado su proyecto final.");
    } else {
        console.log("\nTodos los estudiantes han entregado su proyecto final.");
    }
});


//ctrl + alt + b 