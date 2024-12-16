import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Table from "./Table"; // Asegúrate de tener el componente Table importado correctamente

import { registros } from "../../assets/registros"; // Datos de registros

// Definir el tipo para los registros


// Definir las claves posibles para las categorías (tecnologia, contabilidad, etc.)
type Categoria = "tecnologia" | "contabilidad"; // Ajusta según las categorías que tengas en tu objeto 'registros'

// Definir la estructura de registros según las categorías

export default function Abierto() {
    // Estado para gestionar qué categoría está abierta
    const [openCategory, setOpenCategory] = useState<Categoria | null>(null);
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
                            onClick={() => toggleMenu(categoryTyped)}
                            className={`${openCategory === categoryTyped ? "" : "hover:bg-gray-100  border-b-2"} p-3 `}
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-titleGreen font-bold">
                                    {categoryTyped.charAt(0).toUpperCase() + categoryTyped.slice(1)}
                                    <span className="font-normal"> ({registros[categoryTyped].abierto.length})</span>
                                </p>
                                <span className="transition-transform duration-300 transform">
                                    {openCategory === categoryTyped ? <AiOutlineUp /> : <AiOutlineDown />} {/* Ícono de abrir/cerrar */}
                                </span>
                            </div>

                            {openCategory === categoryTyped && (
                                <div onClick={(e) => e.stopPropagation()}>
                                    {/* Aquí enviamos los registros abiertos de esa categoría a la tabla */}
                                    <Table
                                        data={registros[categoryTyped].abierto}
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
