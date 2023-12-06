import { Raices } from "./class/RaicesClass";

const ecuacion = new Raices(1, -3, 2);

export const script3 = (): void => {
    console.log(`Primera ecuación de 2º grado con los siguientes valores ${ecuacion.toString()}`)
    console.log(`¿Tiene raíces? ${ecuacion.tieneRaices()}`);
    console.log(`¿Tiene raíz única? ${ecuacion.tieneRaiz()}`);
    ecuacion.calcular();
}
