"use client"

import { useState, useEffect } from 'react';
import CardComercio from '/src/componentes/CardComercio';
import Search from '/src/componentes/Search';
import '/src/app/styles/carga.css';

function MostrarComerciosScoring({typeUser}) {
    const [comercios, setComercios] = useState([]);
    const [filteredComercios, setFilteredComercios] = useState([]); 

    const calcularPromedioScoring = (scoring) => {
        const suma = scoring.reduce((acumulado, valorActual) => acumulado + parseInt(valorActual), 0);
        console.log(suma / scoring.length);
        return suma / scoring.length;
    };
    
    useEffect(() => {
        async function fetchComerciosData() {
            try {
                const response = await fetch('/api/comercio/comercio/');
                const data = await response.json();
                if (response.ok) {
                    // Añadir scoring promedio a cada comercio
                    const comerciosConScoring = data.comercio.map(comercio => ({
                        ...comercio,
                        promedioScoring: calcularPromedioScoring(comercio.scoring)
                    }));
    
                    // Ordenar comercios por scoring promedio de mayor a menor
                    const comerciosOrdenados = comerciosConScoring.sort((a, b) => b.promedioScoring - a.promedioScoring);
    
                    setComercios(comerciosOrdenados);
                    setFilteredComercios(comerciosOrdenados); 
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
            <h2 className="text-3xl Font_BodoniBold text-white mt-20 mb-4">Descubre Los Mejores Comercios</h2>
            <p className="Font_Caslon text-gray-400 text-center max-w-2xl pb-5 mb-10">
                Explora una selección curada de comercios ordenada por las valoraciones de nuestros más fieles usuarios.
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

export default MostrarComerciosScoring;

