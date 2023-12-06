import { Entregable } from "../interface/IEntregable";

export class Videojuego implements Entregable {
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compania: string;

    constructor(titulo: string, horasEstimadas: number, genero: string, compania: string) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = genero;
        this.compania = compania;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getHorasEstimadas(): number {
        return this.horasEstimadas;
    }

    public getEntregado(): boolean {
        return this.entregado;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getCompania(): string {
        return this.compania;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setHorasEstimadas(horasEstimadas: number): void {
        this.horasEstimadas = horasEstimadas;
    }

    public setEntregado(entregado: boolean): void {
        this.entregado = entregado;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public setCompania(compania: string): void {
        this.compania = compania;
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
        if (a instanceof Videojuego) {
            return this.horasEstimadas - a.horasEstimadas;
        }
        return 0;
    }

    public toString(): string {
        return `Videojuego [Titulo: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Genero: ${this.genero}, Compania: ${this.compania}]`;
    }
}
