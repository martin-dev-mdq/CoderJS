
alumnos = [];
cursos = ["JavaScript", "Desarrollo web", "Python", "Java"];

function altaAlumno() {
    const nombre = prompt("Ingrese el nombre del alumno:");
    const apellido = prompt("Ingrese el apellido del alumno:");
    let curso = prompt(`Seleccione el curso al que se inscribe:\n ${cursos.map((curso, index) => `${index + 1}. ${curso}`).join("\n")}`);
    curso = cursos[parseInt(curso) - 1];
    alumnos.push({ nombre, apellido, curso });
    alert(`Alumno ${nombre} ${apellido} inscrito en el curso ${curso}.`);
    menuPrincipal()
}

function altaCurso() {
    const nuevoCurso = prompt("Ingrese el nombre del nuevo curso:");
    cursos.push(nuevoCurso);
    alert(`Curso ${nuevoCurso} agregado.`);
    menuPrincipal();
}

function listadoAlumnos() {
    if (alumnos.length === 0) {
        alert("No hay alumnos inscriptos.");
    } else {
        const lista = alumnos.map((alumno, index) => `${index + 1}. ${alumno.nombre} ${alumno.apellido} - Curso: ${alumno.curso}`).join("\n");
        alert(lista);
    }
    menuPrincipal();
}

function listadoCursos() {
    if (cursos.length === 0) {
        alert("No hay cursos disponibles.");
    } else {
        const lista = cursos.map((curso, index) => `${index + 1}. ${curso}`).join("\n");
        alert(`Cursos disponibles:\n\n ${lista}`);
    }
    menuPrincipal();
}
    


function menuPrincipal() {
    const opcion = prompt(`Bienvenido al sistema de inscripción de alumnos a cursos de informática. 
    Selecciona una opción:

    1. Alta de alumno
    2. Alta nuevo curso
    3. Listado de alumnos
    4. Listado de cursos
    5. Salir
    `);
    switch (opcion) {
        case "1":
            altaAlumno();
            break;
        case "2":
            altaCurso();
            break;
        case "3":
            listadoAlumnos()
            break;
        case "4":
            listadoCursos();
            break;
        case "5":
            alert("Saliendo del sistema.");
            break;
        default:
            alert("Opción no válida.");
            menuPrincipal();
    }
    
}

menuPrincipal();
alert("Gracias por usar el sistema de inscripción de alumnos a cursos de informática.");