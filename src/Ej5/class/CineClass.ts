import { Espectador } from "./EspectadorClass";
import { Pelicula } from "./PeliculaClass";

export class Cine {
    private asientos: boolean[][]; 
    private peliculaActual: Pelicula;
    private precioEntrada: number;

    constructor(filas: number, columnas: number, pelicula: Pelicula, precioEntrada: number) {
        this.asientos = Array.from({ length: filas }, () => Array(columnas).fill(true));
        this.peliculaActual = pelicula;
        this.precioEntrada = precioEntrada;
    }

    private asignarAsiento(espectador: Espectador): void {
        let fila: number, columna: number;
        do {
            fila = Math.floor(Math.random() * this.asientos.length);
            columna = Math.floor(Math.random() * this.asientos[0].length);
        } while (!this.asientos[fila][columna]);

        this.asientos[fila][columna] = false;
        console.log(`${espectador.nombre} se ha sentado en el asiento ${String.fromCharCode(65 + columna)}${fila - fila}`);
    }

    public simularSala(espectadores: Espectador[]): void {
        for (const espectador of espectadores) {
            if (this.tieneEdadParaVerPelicula(espectador) && this.tieneDineroParaEntrada(espectador)) {
                this.asignarAsiento(espectador);
            } else {
                console.log(`${espectador.nombre} no cumple con los requisitos para ver la película.`);
            }
        }
    }

    private tieneEdadParaVerPelicula(espectador: Espectador): boolean {
        return espectador.edad >= this.peliculaActual.edadMinima;
    }

    private tieneDineroParaEntrada(espectador: Espectador): boolean {
        return espectador.dinero >= this.precioEntrada;
    }
}
