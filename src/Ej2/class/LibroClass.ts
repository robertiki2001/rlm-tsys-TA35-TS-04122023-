export class Libro {
    private isbn: string;
    private titulo: string;
    private autor: string;
    private numPaginas: number;

    constructor(isbn: string, titulo: string, autor: string, numPaginas: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    // Métodos get y set
    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getNumPaginas(): number {
        return this.numPaginas;
    }

    public setNumPaginas(numPaginas: number): void {
        this.numPaginas = numPaginas;
    }

    // Método toString
    public toString(): string {
        return `El libro con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}