import { Persona } from "./PersonaClass";

export class Estudiante extends Persona {
    private calificacion: number;
    private asistencia: boolean;

    constructor(nombre: string, edad: number, sexo: string, calificacion: number) {
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
        this.asistencia = Math.random() > 0.5;
    }

    public obtenerCalificacion(): number {
        return this.calificacion;
    }

    public obtenerAsistencia(): boolean {
        return this.asistencia;
    }

    public obtenerSexo(): string {
        return this.sexo;
    }
}