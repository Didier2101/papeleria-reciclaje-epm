import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Abierto from '../components/componentsTable/Abierto';
import Notificado from '../components/componentsTable/Notificado';
import Descartado from '../components/componentsTable/Descartado';
import Rescatado from '../components/componentsTable/Rescatado';
export default function Table() {

    const location = useLocation();
    // Función para determinar si un enlace está activo
    const isActive = (path: string) => location.pathname === path;



    return (
        <>
            <div className=" px-6">
                <section>
                    <nav className="flex justify-between border-b-2 border-b-customGreen">
                        <Link
                            to="/"
                            className={`w-full text-center py-2 rounded-tl-[20px] rounded-tr-[20px] ${isActive('/') ? 'bg-customGreen text-white' : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            Abierto
                        </Link>
                        <Link
                            to="/notificado"
                            className={`w-full text-center py-2 rounded-tl-[20px] rounded-tr-[20px] ${isActive('/notificado') ? 'bg-customGreen text-white' : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            Notificado
                        </Link>
                        <Link
                            to="/descartado"
                            className={`w-full text-center py-2 rounded-tl-[20px] rounded-tr-[20px] ${isActive('/descartado') ? 'bg-customGreen text-white' : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            Descartado
                        </Link>
                        <Link
                            to="/rescatado"
                            className={`w-full text-center py-2 rounded-tl-[20px] rounded-tr-[20px] ${isActive('/rescatado') ? 'bg-customGreen text-white' : 'bg-gray-100 text-gray-500'
                                }`}
                        >
                            Rescatado
                        </Link>
                    </nav>
                    <div className="flex justify-between">
                        <Routes>
                            <Route path="/" element={<Abierto />} />
                            <Route path="/notificado" element={<Notificado />} />
                            <Route path="/descartado" element={<Descartado />} />
                            <Route path="/rescatado" element={<Rescatado />} />
                        </Routes>
                    </div>
                </section>
            </div>

        </>
    )
}
