import { Espectador } from "./class/EspectadorClass";
import { Pelicula } from "./class/PeliculaClass";
import { Cine } from "./class/CineClass";

const pelicula = new Pelicula("Inception", 150, 12, "Christopher Nolan");
const cine = new Cine(8, 9, pelicula, 10);

const espectadores: Espectador[] = [
    new Espectador("Juan", 25, 15),
    new Espectador("Ana", 14, 10),
    new Espectador("Carlos", 30, 8)
];

export const script5 = (): void => {
    cine.simularSala(espectadores);
};
