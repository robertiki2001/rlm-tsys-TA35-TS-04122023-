export interface Entregable {
    entregar(): void;
    devolver(): void;
    isEntregado(): boolean;
    compareTo(a: any): number;
}