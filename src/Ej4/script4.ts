//import { Profesor } from "./class/ProfessorClass";
import { Estudiante } from "./class/EstudianteClass";
import { Aula } from "./class/AulaClass";

const aulaMatematicas = new Aula(1, 30, "Matemáticas");

for (let i = 0; i < 30; i++) {
    const estudiante = new Estudiante(`Estudiante${i + 1}`, 20 + i, i % 2 === 0 ? "M" : "F", Math.floor(Math.random() * 11));
    aulaMatematicas.agregarEstudiante(estudiante);
}

export const script4 = (): void => {
aulaMatematicas.mostrarResultados();
}

