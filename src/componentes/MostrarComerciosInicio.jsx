"use client"

import { useState, useEffect } from 'react';
import CardComercioInicio from '/src/componentes/CardComercioInicio';
import CardResenya from '/src/componentes/CardResenya';
import '/src/app/styles/carga.css';
import Link from "next/link";

function MostrarComerciosInicio({ typeUser }) {
    const [filteredComercios, setFilteredComercios] = useState([]);
    const [resenyas, setResenyas] = useState([]);

    useEffect(() => {
        async function fetchComerciosData() {
            try {
                const response = await fetch('/api/comercio/comercio/');
                const data = await response.json();
                if (response.ok) {
                    const randomComercios = data.comercio.sort(() => 0.5 - Math.random()).slice(0, 6);
                    setFilteredComercios(randomComercios);

                    const allResenyas = data.comercio.reduce((acc, comercio) => [...acc, ...comercio.reseñas.map(reseña => ({ reseña, nombreComercio: comercio.nombreComercio, comercioId: comercio.id }))], []);
                    const randomResenyas = allResenyas.sort(() => 0.5 - Math.random()).slice(0, 6);
                    setResenyas(randomResenyas);
                } else {
                    console.error("Comercios not found", data.message);
                }
            } catch (error) {
                console.error("Error fetching comercios data: ", error);
            }
        }

        fetchComerciosData();
    }, []);

    return (
        <div className="bg-black flex flex-col items-center justify-center mt-8 pb-8">
            <div className="w-full max-w-7xl px-4">
                <Link href="/typesUsers/anonimo/comercios">
                    <h2 className="Font_BodoniBold text-white text-3xl text-center mt-8 mb-6">Descubre Nuestros Comercios &rarr;</h2>
                </Link>
                <div className="w-full max-w-7xl px-4 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {filteredComercios.map(comercio => (
                            <div key={comercio.id} className="my-4">
                                <CardComercioInicio
                                    url={`/typesUsers/${typeUser}/comercios/${comercio.id}`}
                                    nombreComercio={comercio.nombreComercio}
                                    ciudad={comercio.ciudad}
                                    id={comercio.id}
                                    imagenUrl={comercio.fotos && comercio.fotos.length > 0 ? `/FotosComercios/${comercio.fotos[0]}.png` : '/FotosComercios/default.png'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                <Link href="/typesUsers/anonimo/comercios">
                    <h2 className="Font_BodoniBold text-white text-3xl text-center my-20">Opiniones de Nuestros Usuarios &rarr;</h2>
                </Link>
                <div className="w-full max-w-7xl px-4 mt-10 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {resenyas.map((reseñaObj, index) => (
                            <CardResenya
                                key={index}
                                resenya={reseñaObj.reseña}
                                nombreComercio={reseñaObj.nombreComercio}
                                url={`/typesUsers/${typeUser}/comercios/${reseñaObj.comercioId}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostrarComerciosInicio;


