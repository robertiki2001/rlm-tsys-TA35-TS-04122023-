import { Persona } from "./PersonaClass";

export class Profesor extends Persona {
    private materia: string;

    constructor(nombre: string, edad: number, sexo: string, materia: string) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }

    public obtenerMateria(): string {
        return this.materia;
    }

    public estaDisponible(): boolean {
        return Math.random() > 0.2; // 20% de estar disponible
    }
}