import { Estudiante } from "./EstudianteClass";
import { Profesor } from "./ProfessorClass";

export class Aula {
    private id: number;
    private maxEstudiantes: number;
    private materia: string;
    private estudiantes: Estudiante[];
    private profesor: Profesor;

    constructor(id: number, maxEstudiantes: number, materia: string) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.estudiantes = [];
        this.profesor = new Profesor("Profesor", 35, "M", materia);
    }

    public puedeDarClase(): boolean {
        const porcentajeAsistencia = this.calcularPorcentajeAsistencia();
        return (
            this.profesor.estaDisponible() &&
            this.profesor.obtenerMateria() === this.materia &&
            porcentajeAsistencia > 50
        );
    }

    private calcularPorcentajeAsistencia(): number {
        const asistencia = this.estudiantes.filter((estudiante) => estudiante.obtenerAsistencia());
        return (asistencia.length / this.maxEstudiantes) * 100;
    }

    public agregarEstudiante(estudiante: Estudiante): void {
        if (this.estudiantes.length < this.maxEstudiantes) {
            this.estudiantes.push(estudiante);
        }
    }

    public mostrarResultados(): void {
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.obtenerCalificacion() >= 5);

        console.log(`En el aula ${this.id} de ${this.materia}, se puede dar clase:`);
        console.log(`- Profesor disponible: ${this.profesor.estaDisponible()}`);
        console.log(`- Materia del profesor coincide con el aula: ${this.profesor.obtenerMateria() === this.materia}`);
        console.log(`- Porcentaje de asistencia: ${this.calcularPorcentajeAsistencia()}%`);
        console.log(`- Aprobados: ${aprobados.length} estudiantes`);

        const aprobadosPorGenero = this.calcularAprobadosPorGenero(aprobados);
        console.log(`- Aprobados Masculinos: ${aprobadosPorGenero.M} estudiantes`);
        console.log(`- Aprobadas Femeninas: ${aprobadosPorGenero.F} estudiantes`);
    }

    private calcularAprobadosPorGenero(aprobados: Estudiante[]): { M: number; F: number } {
        const aprobadosMasculinos = aprobados.filter((estudiante) => estudiante.obtenerAsistencia() && estudiante.obtenerSexo() === "M");
        const aprobadasFemeninas = aprobados.filter((estudiante) => estudiante.obtenerAsistencia() && estudiante.obtenerSexo() === "F");

        return { M: aprobadosMasculinos.length, F: aprobadasFemeninas.length };
    }
}