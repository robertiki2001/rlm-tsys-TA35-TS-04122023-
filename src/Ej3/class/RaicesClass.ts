export class Raices {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getDiscriminante(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    public tieneRaices(): boolean {
        return this.getDiscriminante() >= 0;
    }

    public tieneRaiz(): boolean {
        return this.getDiscriminante() === 0;
    }

    public calcular(): void {
        const discriminante = this.getDiscriminante();

        if (discriminante > 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Soluciones: ${raiz1} y ${raiz2}`);
        } else if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`Solución única: ${raiz}`);
        } else {
            console.log("No hay soluciones reales.");
        }
    }

    public obtenerRaices(): void {
        if (this.tieneRaices()) {
            this.calcular();
        } else {
            console.log("No hay soluciones reales.");
        }
    }

    public obtenerRaiz(): void {
        if (this.tieneRaiz()) {
            this.calcular();
        } else {
            console.log("No hay soluciones reales o hay más de una solución.");
        }
    }
}