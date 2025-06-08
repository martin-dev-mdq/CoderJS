
alumnos = [];
cursos = ["JavaScript", "Desarrollo web", "Python", "Java"];

function altaAlumno() {
  const nombre = prompt("Ingrese el nombre del alumno:");
  const apellido = prompt("Ingrese el apellido del alumno:");

  let listaCursos = '';
  for (let i = 0; i < cursos.length; i++) {
    listaCursos += `${i + 1}. ${cursos[i]}\n`;
  }

  let cursoSeleccionado = prompt(`Seleccione el curso al que se inscribe:\n ${listaCursos}`);
  cursoSeleccionado = cursos[parseInt(cursoSeleccionado) - 1];

  alumnos.push({ nombre, apellido, curso: cursoSeleccionado });
  alert(`Alumno ${nombre} ${apellido} inscripto en el curso ${cursoSeleccionado}.`);

  menuPrincipal();
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
        let lista = '';
        for (let i = 0; i < alumnos.length; i++) {
            lista += `${i + 1}. ${alumnos[i].nombre} ${alumnos[i].apellido} - Curso: ${alumnos[i].curso}\n`;
        }
        alert(lista);
    }
    menuPrincipal();
}

function listadoCursos() {
    if (cursos.length === 0) {
        alert("No hay cursos disponibles.");
    } else {
        let lista = '';
        for (let i = 0; i < cursos.length; i++) {
            lista += `${i + 1}. ${cursos[i]}\n`;
        }
        alert(`Cursos disponibles:\n\n ${lista}`);
    }
    menuPrincipal();
}
    


function menuPrincipal() {
    const opcion = prompt(`Bienvenido al sistema de inscripción de alumnos a cursos de informática. 
    Selecciona una opción:

    1. Alta de alumno
    2. Listado de alumnos
    3. Alta nuevo curso
    4. Listado de cursos
    5. Salir
    `);
    switch (opcion) {
        case "1":
            altaAlumno();
            break;
        case "2":
            listadoAlumnos();
            break;
        case "3":
            altaCurso();
            break;
        case "4":
            listadoCursos();
            break;
        case "5":
            alert("Saliendo del sistema...");
            break;
        default:
            alert("Opción no válida.");
            menuPrincipal();
    }
    
}

menuPrincipal();
alert("Gracias por usar el sistema de inscripción de alumnos a cursos de informática.");