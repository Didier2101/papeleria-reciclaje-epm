import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { TbKeyframeFilled } from "react-icons/tb";
import { FaCheck, FaArrowRotateLeft } from "react-icons/fa6";
import Pagination from "./Pagination";

type Registro = {
    id: number;
    nombre: string;
    fechaEliminacion: string;
    eliminadoPor: string;
    creadoPor: string;
    ubicacionOriginal: string;
};

type TableProps = {
    data: Registro[];
};

export default function Table({ data }: TableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const handlePageChange = (page: number, size: number) => {
        setCurrentPage(page);
        setPageSize(size);
    };
    // Filtrar registros según la página actual y el tamaño de página
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = data.slice(startIndex, startIndex + pageSize);

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className="mt-3 bg-white w-full">
                {data.length > 0 && (
                    <h3 className="text-gray-700 font-semibold mb-2">
                        <span className=" font-bold">{data.length}</span> Registros encontrados
                    </h3>
                )}
                <table className="text-left  w-full">
                    <thead>
                        <tr className="bg-titleGreen text-white  ">
                            <th className="text-center font-semibold px-4 py-2 ">
                                {/* Checkbox en el encabezado */}
                                <input
                                    type="checkbox"
                                    className={`bg-gray-300 rounded-md h-6 w-6 mt-2 ${isChecked ? "bg-titleGreen border-2 border-titleGreen" : ""}`}
                                    onChange={handleChange}
                                    checked={isChecked}
                                />
                            </th>
                            <th className="text-center font-semibold px-4 py-2">Nombre</th>
                            <th className="text-center font-semibold px-4 py-2">
                                <div className="inline-flex items-center gap-2">
                                    <TbKeyframeFilled /><FaFilter /> Fecha de eliminación
                                </div>
                            </th>
                            <th className="text-center font-semibold px-4 py-2">
                                <div className="inline-flex items-center gap-2">
                                    <TbKeyframeFilled /><FaFilter /> Eliminado por
                                </div>
                            </th>
                            <th className="text-center font-semibold px-4 py-2">
                                <div className="inline-flex items-center gap-2">
                                    <TbKeyframeFilled /><FaFilter /> Creado por
                                </div>
                            </th>
                            <th className="text-center font-semibold px-4 py-2">
                                <div className="inline-flex items-center gap-2">
                                    <TbKeyframeFilled /><FaFilter /> Ubicación original
                                </div>
                            </th>
                            <th className="text-center font-semibold px-4 py-2">
                                <div className="inline-flex items-center gap-2">
                                    <TbKeyframeFilled /><FaFilter /> Acciones
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-100 cursor-pointer border-b border-gray-200">
                                <td className="text-center px-4 py-2">
                                    <input type="checkbox" className="bg-gray-300 rounded-md h-6 w-6 mt-1" />
                                </td>
                                <td className="px-4 py-2 text-center">{row.nombre}</td>
                                <td className="px-4 py-2 text-center">{row.fechaEliminacion}</td>
                                <td className="px-4 py-2 text-center">{row.eliminadoPor}</td>
                                <td className="px-4 py-2 text-center">{row.creadoPor}</td>
                                <td className="px-4 py-2 text-center">{row.ubicacionOriginal}</td>
                                <td className="px-4 py-2 flex justify-end items-center gap-2">
                                    <FaArrowRotateLeft size={20} className="text-titleGreen cursor-pointer mt-2" />
                                    <FaCheck size={20} className="text-titleGreen cursor-pointer mt-2" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Componente de Paginación */}
            <Pagination
                totalRecords={data.length}
                pageSizeOptions={[10, 20, 30]}
                onPageChange={handlePageChange}
            />
        </>

    );
}
