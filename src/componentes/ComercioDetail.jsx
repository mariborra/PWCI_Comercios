"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import '/src/app/styles/carga.css';

const ComercioDetail = ({ comercioId }) => {
    const [comercioData, setComercioData] = useState(null);

    useEffect(() => {
        async function fetchComercioData() {
            try {
                const response = await fetch(`/api/comercio/comercio/?id=${comercioId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                if (response.status === 200) {
                    const comercio = data.comercio.find(c => c.id === comercioId);
                    setComercioData(comercio);
                } else {
                    console.error("Comercio not found");
                }
            } catch (error) {
                console.error("Error fetching comercio data: ", error);
            }
        }

        fetchComercioData();
    }, [comercioId]);

    if (!comercioData) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="inline-flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-indigo-800 h-12 w-12 mb-4"></div>
                    <h2 className="Font_BodoniBold text-xl text-indigo-800">Cargando...</h2>
                </div>
            </div>
        );
    }

    const firstFoto = comercioData.fotos.length > 0 ? comercioData.fotos[0] : null;
    console.log(firstFoto);

    const calculatePercentage = (scores, star) => {
        const count = scores.filter((score) => parseInt(score) === star).length;
        return ((count / scores.length) * 100).toFixed(0);
    };

    const ProgressBar = ({ percentage }) => {
        return (
            <div className="w-3/4 bg-gray-600 rounded h-2">
                <div
                    className="bg-yellow-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        );
    };

    return (
        <div className="bg-black overflow-hidden mb-5">
            <div className="relative min-h-screen w-full border-b border-indigo-500">
                {firstFoto && (
                    <Image
                        src={`/FotosComercios/${firstFoto}.png`}
                        alt={`${comercioData.nombreComercio} image`}
                        layout="fill"
                        objectFit="cover"
                        className="opacity-75"
                    />
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6" style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}>
                    <h1 className="Font_BodoniBold text-5xl font-bold text-white mb-4">{comercioData.nombreComercio}</h1>
                    <p className="Font_Caslon text-xl text-white mb-4">{comercioData.titulo || 'Explora nuestras novedades'}</p>
                </div>
            </div>

            <div className="bg-black py-10">
                <div className="text-center">
                    <h2 className="text-4xl Font_BodoniBold text-white mb-3">Sobre Nosotros</h2>
                    <p className="Font_Caslon text-gray-300 max-w-4xl mx-auto mb-6">
                        {comercioData.resumen || 'Información del comercio no disponible en este momento.'}
                    </p>
                    {comercioData.actividad && (
                        <div className="mb-6">
                            <p className="Font_Caslon text-gray-300">{comercioData.actividad}</p>
                        </div>
                    )}
                    <div className="inline-block mb-6">
                        <span className="block h-0.5 w-40 bg-indigo-700 mx-auto"></span>
                    </div>
                    {comercioData.textos.length > 0 && (
                        <div className="max-w-2xl mx-auto">
                            {comercioData.textos.map((texto, index) => (
                                <div key={index} className="mb-4">
                                    <p className="Font_Caslon text-sm text-white mb-2">{texto}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-black py-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-3xl Font_BodoniBold text-white mb-4">Descubre Nuestro Local</h2>
                    <p className="Font_Caslon text-white text-lg mb-6 hidden md:block">
                        Un recorrido visual por la diversidad y el encanto de nuestro espacio.
                    </p>
                    {comercioData.fotos && comercioData.fotos.length > 1 ? (
                        <div className="w-full flex flex-wrap justify-center gap-4 px-4">
                            {comercioData.fotos.slice(1).map((foto, index) => (
                                <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2 mx-4">
                                    <Image
                                        src={`/FotosComercios/${foto}.png`}
                                        alt={`Foto del local ${index + 1}`}
                                        width={400}
                                        height={400}
                                        className="mx-auto"
                                        layout="responsive"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="Font_Caslon text-white">Actualmente no disponemos de fotos del comercio.</p>
                    )}
                </div>
            </div>

            <div className="bg-black py-8">
                <h2 className="text-3xl Font_BodoniBold text-center text-white mb-6">¿Qué dicen las personas?</h2>
                <div className="flex flex-wrap justify-center gap-4 px-6 mb-8">
                    {comercioData.reseñas.length > 0 ? (
                        comercioData.reseñas.map((reseña, index) => (
                            <div key={index} className="text-white p-4 my-4 md:my-0 flex-auto rounded-lg shadow-md max-w-md">
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={"/Iconos/quote.png"}
                                        alt="Comillas"
                                        width={30}
                                        height={30}
                                        key={index}
                                    />
                                </div>
                                <p className="Font_Caslon text-md text-justify">{reseña}</p>
                            </div>
                        ))
                    ) : (
                        <p className="Font_Caslon text-white">Aún no hay reseñas.</p>
                    )}
                </div>

                <h2 className="text-3xl Font_BodoniBold text-center text-white my-6">La confianza de nuestros clientes</h2>
                <p className="Font_Caslon text-gray-400 text-center max-w-2xl mx-auto mb-6">Las estrellas reflejan la satisfacción general de nuestros clientes y son un testimonio de nuestro compromiso con la excelencia.</p>
                {comercioData.scoring && comercioData.numeroDePuntuaciones > 0 ? (
                    <div className="p-4 rounded-lg shadow-lg max-w-md mx-auto">
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <div key={star} className="flex items-center">
                                    <div className="flex items-center mr-2">
                                        {[...Array(star)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">★</span>
                                        ))}
                                        {[...Array(5 - star)].map((_, i) => (
                                            <span key={i} className="text-gray-600">☆</span>
                                        ))}
                                    </div>
                                    <ProgressBar percentage={calculatePercentage(comercioData.scoring, star)} />
                                    <span className="ml-2 text-sm text-white">{calculatePercentage(comercioData.scoring, star)}%</span>
                                </div>
                            ))}
                        </div>
                        <p className="Font_Caslon text-gray-300 text-center mt-4">
                            Basado en {comercioData.numeroDePuntuaciones} puntuaciones de clientes.
                        </p>
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <h3 className="text-xl Font_Caslon text-white">Aún no hay puntuaciones</h3>
                        <p className="Font_Caslon text-sm text-gray-400">Sé el primero en valorar nuestra calidad y servicio.</p>
                    </div>
                )}
            </div>


            <div className="bg-black text-white text-center py-4">
                <h2 className="Font_BodoniBold text-3xl  text-center mb-6">Ponte en contacto</h2>
                <p className="Font_Caslon text-sm text-gray-400 text-center mb-8">
                    Explora nuestra amplia selección de productos y servicios. Siempre estamos disponibles para responder tus preguntas y ofrecerte la mejor experiencia. Visítanos o contáctanos para conocer más.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="Font_Caslon text-sm flex items-center gap-2">
                        <Image
                            src="/Iconos/location.png"
                            alt="Icono location"
                            width={25}
                            height={25}
                        />
                        <div>
                            {comercioData.direccion}, {comercioData.ciudad || ''}
                        </div>
                    </div>
                    <div className="Font_Caslon text-sm flex items-center gap-2">
                        <Image
                            src="/Iconos/phone.png"
                            alt="Icono movil"
                            width={25}
                            height={25}
                        />
                        + (34) {comercioData.telefono}
                    </div>
                    <div className="Font_Caslon text-sm flex items-center gap-2">
                        <Image
                            src="/Iconos/email.png"
                            alt="Icono email"
                            width={25}
                            height={25}
                        />
                        {comercioData.email}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ComercioDetail;

