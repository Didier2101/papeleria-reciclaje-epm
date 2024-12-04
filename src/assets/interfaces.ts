// interfaces.ts

export interface Registro {
    id: number;
    nombre: string;
    fechaEliminacion: string;
    eliminadoPor: string;
    creadoPor: string;
    ubicacionOriginal: string;
}

export interface Registros {
    abierto: Registro[];
    notificado: Registro[];
    descartado: Registro[];
    rescatado: Registro[];
}
