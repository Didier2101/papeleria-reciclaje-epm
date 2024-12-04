import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Table from "./Table"; // Asegúrate de tener el componente Table importado correctamente

import { registros } from "../../assets/registros"; // Datos de registros

// Definir el tipo para los registros
type Registro = {
    id: number;
    nombre: string;
    fechaEliminacion: string;
    eliminadoPor: string;
    creadoPor: string;
    ubicacionOriginal: string;
};

// Definir las claves posibles para las categorías (tecnologia, contabilidad, etc.)
type Categoria = "tecnologia" | "contabilidad"; // Ajusta según las categorías que tengas en tu objeto 'registros'

// Definir la estructura de registros según las categorías
type Categorias = {
    [key in Categoria]: {
        abierto: Registro[];
        notificado: Registro[];
        descartado: Registro[];
    };
};

export default function Descartado() {
    // Estado para gestionar qué categoría está abierta
    const [openCategory, setOpenCategory] = useState<Categoria | null>(null);

    // Función para manejar el clic en las categorías
    const [isOpen, setIsOpen] = useState(false);

    // Función para manejar el clic en las categorías
    const toggleMenu = (category: Categoria) => {
        // Si ya está abierta la categoría, la cerramos, si no la abrimos
        setOpenCategory(openCategory === category ? null : category);
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-1 w-full">
            <ul>
                {/* Iterar sobre las categorías de registros */}
                {Object.keys(registros).map((category) => {
                    const categoryTyped = category as Categoria; // Asegurarse de que 'category' es de tipo Categoria
                    return (
                        <li
                            key={categoryTyped}
                            // Al hacer clic, se alterna la categoría abierta
                            className="p-3 cursor-pointer border-2 border-gray-200 hover:bg-gray-100"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-titleGreen font-bold">
                                    {categoryTyped.charAt(0).toUpperCase() + categoryTyped.slice(1)} {/* Capitalizamos el nombre de la categoría */}
                                    <span className="font-normal"> ({registros[categoryTyped].descartado.length})</span> {/* Muestra la cantidad de registros descartados */}
                                </p>
                                <span className="transition-transform duration-300 transform"
                                    onClick={() => toggleMenu(categoryTyped)}
                                >
                                    {isOpen ? <AiOutlineUp /> : <AiOutlineDown />} {/* Ícono de abrir/cerrar */}
                                </span>
                            </div>

                            {/* Mostrar los registros de la categoría si está abierta */}
                            {openCategory === categoryTyped && (
                                <div>
                                    {/* Aquí enviamos los registros descartados de esa categoría a la tabla */}
                                    <Table
                                        data={registros[categoryTyped].descartado}
                                    />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
