import { Serie } from "./class/SerieClass";
import { Videojuego } from "./class/VideojuegoClass";

const series: Serie[] = [
    new Serie('Breaking Bad', 'Vince Gilligan'),
    new Serie('Game of Thrones', 'George R. R. Martin'),
    new Serie('Stranger Things', 'Duffer Brothers'),
    new Serie('The Mandalorian', 'Jon Favreau'),
    new Serie('The Witcher', 'Lauren Schmidt Hissrich')
];

const videojuegos: Videojuego[] = [
    new Videojuego('The Legend of Zelda: Breath of the Wild', 50, 'Aventura', 'Nintendo'),
    new Videojuego('FIFA 22', 20, 'Deportes', 'EA Sports'),
    new Videojuego('Cyberpunk 2077', 40, 'RPG', 'CD Projekt'),
    new Videojuego('Assassin\'s Creed Valhalla', 30, 'Acción-Aventura', 'Ubisoft'),
    new Videojuego('Fortnite', 10, 'Battle Royale', 'Epic Games')
];

series[1].entregar();
series[3].entregar();
videojuegos[0].entregar();
videojuegos[2].entregar();

export const script1 = (): void => {
const seriesEntregadas = series.filter((serie) => serie.isEntregado());
const videojuegosEntregados = videojuegos.filter((videojuego) => videojuego.isEntregado());

console.log(`Series entregadas: ${seriesEntregadas.length}`);
console.log(`Videojuegos entregados: ${videojuegosEntregados.length}`);

const serieConMasTemporadas = series.reduce((a, b) => (a.getNumeroTemporadas() > b.getNumeroTemporadas() ? a : b));
const videojuegoConMasHoras = videojuegos.reduce((a, b) => (a.getHorasEstimadas() > b.getHorasEstimadas() ? a : b));

console.log(`Serie con más temporadas: ${serieConMasTemporadas.toString()}`);
console.log(`Videojuego con más horas estimadas: ${videojuegoConMasHoras.toString()}`);
};
