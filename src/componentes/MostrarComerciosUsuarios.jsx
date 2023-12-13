"use client"

import { useState, useEffect } from 'react';
import CardComercio from '/src/componentes/CardComercio';
import Search from '/src/componentes/Search';
import '/src/app/styles/carga.css';
import Link from 'next/link';

function MostrarComerciosUsuarios({ typeUser }) {
    const [comercios, setComercios] = useState([]);
    const [filteredComercios, setFilteredComercios] = useState([]);

    useEffect(() => {
        async function fetchComerciosData() {
            try {
                const response = await fetch('/api/comercio/comercio/');
                const data = await response.json();
                if (response.ok) {
                    setComercios(data.comercio);
                    setFilteredComercios(data.comercio);
                } else {
                    console.error("Comercios not found", data.message);
                }
            } catch (error) {
                console.error("Error fetching comercios data: ", error);
            }
        }

        fetchComerciosData();
    }, []);

    // Manejar la lógica del filtrado
    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            setFilteredComercios(comercios);
        } else {
            const searchLowerCase = searchTerm.toLowerCase();
            const filtered = comercios.filter(comercio => (
                comercio.id.toLowerCase().includes(searchLowerCase) ||
                comercio.nombreComercio.toLowerCase().includes(searchLowerCase) ||
                comercio.ciudad.toLowerCase().includes(searchLowerCase) ||
                comercio.actividad.toLowerCase().includes(searchLowerCase) ||
                comercio.resumen.toLowerCase().includes(searchLowerCase)
            ));
            setFilteredComercios(filtered);
        }
    };

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <Search onSearch={handleSearch} />

            <div className="self-end mr-4 mt-4">
                <Link href={`/typesUsers/${typeUser}/comercios/Ordenados`} passHref className="Font_Caslon text-sm text-indigo-500 hover:text-indigo-700 transition duration-300 ease-in-out font-semibold mr-4">
                    Ordenar
                </Link>

                <Link href={`/typesUsers/${typeUser}/comercios/Preferencias`} passHref className="Font_Caslon text-sm text-indigo-500 hover:text-indigo-700 transition duration-300 ease-in-out font-semibold">
                    Preferencias
                </Link>
            </div>

            <h2 className="text-3xl Font_BodoniBold text-white mt-10 mb-4">Descubre Comercios Destacados</h2>
            <p className="Font_Caslon text-gray-400 text-center max-w-2xl pb-5 mb-10">
                Explora una selección curada de comercios que destacan por su calidad y servicio excepcional.
            </p>
            <div className="w-full max-w-7xl px-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredComercios.map(comercio => (
                        <div key={comercio.id} className="my-4">
                            <CardComercio
                                url={`/typesUsers/${typeUser}/comercios/${comercio.id}`}
                                nombreComercio={comercio.nombreComercio}
                                titulo={comercio.titulo}
                                id={comercio.id}
                                imagenUrl={comercio.fotos && comercio.fotos.length > 0 ? `/FotosComercios/${comercio.fotos[0]}.png` : '/FotosComercios/default.png'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MostrarComerciosUsuarios;

