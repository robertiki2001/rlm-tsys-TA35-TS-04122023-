import { Libro } from "./class/LibroClass";

const libro1 = new Libro("978-3-16-148410-0", "El Señor de los Anillos", "J.R.R. Tolkien", 1000);
const libro2 = new Libro("978-0-13-235088-4", "Clean Code", "Robert C. Martin", 464);

export const script2 = (): void => {
console.log(libro1.toString());
console.log(libro2.toString());

if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`${libro1.getTitulo()} tiene más páginas que ${libro2.getTitulo()}.`);
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`${libro2.getTitulo()} tiene más páginas que ${libro1.getTitulo()}.`);
} else {
    console.log(`${libro1.getTitulo()} y ${libro2.getTitulo()} tienen la misma cantidad de páginas.`);
}
};