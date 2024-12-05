import { useState } from "react";

type PaginationProps = {
    totalRecords: number; // Número total de registros
    pageSizeOptions: number[]; // Opciones de cantidad por página (e.g., [10, 20, 30])
    onPageChange: (page: number, pageSize: number) => void; // Callback para cambio de página
};

export default function Pagination({ totalRecords, pageSizeOptions, onPageChange }: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const [pageSize, setPageSize] = useState(pageSizeOptions[0]); // Tamaño de página

    const totalPages = Math.ceil(totalRecords / pageSize);

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseInt(e.target.value);
        setPageSize(newSize);
        setCurrentPage(1); // Reinicia a la primera página
        onPageChange(1, newSize);
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        onPageChange(page, pageSize);
    };

    return (
        <div className="flex flex-col items-center mt-4">
            <div className="flex gap-2 mb-2 items-center">
                <span>Mostrar:</span>
                <select
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    className="border rounded px-2 py-1"
                >
                    {pageSizeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span>registros por página</span>
            </div>
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-titleGreen text-white"}`}
                >
                    Primero
                </button>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-titleGreen text-white"}`}
                >
                    Anterior
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-titleGreen text-white" : "bg-gray-200"}`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-titleGreen text-white"}`}
                >
                    Siguiente
                </button>
                <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-titleGreen text-white"}`}
                >
                    Último
                </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Página {currentPage} de {totalPages}
            </p>
        </div>
    );
}
