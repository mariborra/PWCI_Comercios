import React from 'react';
import Link from 'next/link';


const LoginOptions = () => {
    return (
        <div className="container bg-black mx-auto p-6">
            <div className="text-center py-10 space-y-4">
                <p className="Font_Caslon text-indigo-600 text-sm uppercase tracking-wide font-semibold">Inicio Sesión</p>
                <h2 className="Font_BodoniBold text-white text-3xl sm:text-4xl font-bold">
                    Planes de Inicio de Sesión para Todos los Usuarios
                </h2>
                <p className="Font_Caslon text-neutral-100 text-md sm:text-md max-w-xl mx-auto">
                    Elige la opción de inicio que mejor se adapte a tus necesidades y comienza a explorar comercios locales y a expandir tu red de contactos.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="transition duration-300 ease-in-out">
                        <div className="text-white p-4 rounded-lg shadow-lg border border-gray-600 max-w-[23rem] hover:border-indigo-600 hover:bg-slate-950 w-full sm:w-auto">
                            <h3 className="Font_BodoniBold text-xl mb-2">Perfil de Admin</h3>
                            <p className="Font_Garamond mb-4">Acceso exclusivo para gestión y administración de comercios.</p>
                            <Link href="/login/loginAdmin" className="Font_BodoniBold text-center bg-indigo-900 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded block mb-4">
                                Elegir Perfil
                            </Link>
                            <ul className="list-none pl-0 space-y-2">
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Acceso a la página de administración
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Registro de comercios con credenciales
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Consulta Comercios
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Capacidad para eliminar comercios
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="transition duration-300 ease-in-out">
                        <div className="text-white p-4 rounded-lg shadow-lg border border-gray-600 max-w-[23rem] hover:border-indigo-600 hover:bg-slate-950 w-full sm:w-auto">
                            <h3 className="Font_BodoniBold text-xl mb-2">Perfil de Comercio</h3>
                            <p className="Font_Garamond mb-4">Control total sobre el contenido de su página dentro de la plataforma.</p>
                            <Link href="/login/loginComercio" className="Font_BodoniBold text-center bg-indigo-900 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded block mb-4">
                                Elegir Perfil
                            </Link>
                            <ul className="list-none pl-0 space-y-2">
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Subir y actualizar contenido
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Opción para darse de baja
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Consulta de intereses de usuarios
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✗</span>
                                    Sin capacidad para editar valoraciones
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="transition duration-300 ease-in-out">
                        <div className="text-white p-4 rounded-lg shadow-lg border border-gray-600 max-w-[23rem] hover:border-indigo-600 hover:bg-slate-950 w-full sm:w-auto">
                            <h3 className="Font_BodoniBold text-xl mb-2">Perfil de Usuario</h3>
                            <p className="Font_Garamond mb-4">Herramientas y opciones para personalizar tu experiencia en la plataforma.</p>
                            <Link href="/login/loginUser" className="Font_BodoniBold text-center bg-indigo-900 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded block mb-4">
                                Elegir Perfil
                            </Link>
                            <ul className="list-none pl-0 space-y-2">
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Actualización de datos personales
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Configuración de preferencias de oferta
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Capacidad para escribir reseñas
                                </li>
                                <li className="Font_Garamond flex items-center">
                                    <span className="mr-2">✓</span>
                                    Opción de darse de baja
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginOptions;
