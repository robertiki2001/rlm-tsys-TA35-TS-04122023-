import { Entregable } from "../interface/IEntregable";

export class Serie implements Entregable {
    private titulo: string;
    private numeroTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor(titulo: string, creador: string) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "";
        this.creador = creador;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getNumeroTemporadas(): number {
        return this.numeroTemporadas;
    }

    public getEntregado(): boolean {
        return this.entregado;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getCreador(): string {
        return this.creador;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setNumeroTemporadas(numeroTemporadas: number): void {
        this.numeroTemporadas = numeroTemporadas;
    }

    public setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public setCreador(creador: string): void {
        this.creador = creador;
    }

    public entregar(): void {
        this.entregado = true;
    }

    public devolver(): void {
        this.entregado = false;
    }

    public isEntregado(): boolean {
        return this.entregado;
    }

    public compareTo(a: any): number {
        if (a instanceof Serie) {
            return this.numeroTemporadas - a.numeroTemporadas;
        }
        return 0;
    }

    public toString(): string {
        return `Serie [Titulo: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Entregado: ${this.entregado}, Genero: ${this.genero}, Creador: ${this.creador}]`;
    }
}