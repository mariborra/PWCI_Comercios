"use client"

import { useState, useEffect } from 'react';
import CardComercio from '/src/componentes/CardComercio';
import Search from '/src/componentes/Search';
import '/src/app/styles/carga.css';

function MostrarComerciosPreferencias({typeUser, userId}) {
    const [comercios, setComercios] = useState([]);
    const [filteredComercios, setFilteredComercios] = useState([]);
    const [userInterests, setUserInterests] = useState([]);

    console.log(userId);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(`/api/user/user/?id=${userId}`);
                const userData = await response.json();
                if (response.ok && userData.users) {
                    const user = userData.users.find(user => user.id === userId);
                    if (user && user.interests) {
                        const interests = user.interests.toLowerCase().split(',').map(i => i.trim());
                        setUserInterests(interests);
                        console.log("Intereses del usuario:", interests);
                    } else {
                        console.log("User not found or no interests");
                    }
                } else {
                    console.error("Error in response", userData.message);
                }
            } catch (error) {
                console.error("Error fetching user data: ", error);
            }
        }
    
        fetchUserData();
    }, [userId]);
    

    useEffect(() => {
        async function fetchComerciosData() {
            try {
                const response = await fetch('/api/comercio/comercio/');
                const data = await response.json();
                if (response.ok) {
                    setComercios(data.comercio);
                } else {
                    console.error("Comercios not found", data.message);
                }
            } catch (error) {
                console.error("Error fetching comercios data: ", error);
            }

            console.log("Lista de comercios obtenida:", comercios);
        }

        fetchComerciosData();
    }, []);

    useEffect(() => {
        const filtered = comercios.filter(comercio => {
            const actividadesComercio = comercio.actividad.toLowerCase().split(',').map(a => a.trim());
            // console.log("Actividades del comercio:", actividadesComercio); 
            const coincide = actividadesComercio.some(actividad => userInterests.includes(actividad));
            // console.log(`Coincidencia para ${comercio.nombreComercio}:`, coincide);
            return coincide;
        });
    
        console.log("Comercios filtrados:", filtered); // Imprimir comercios filtrados
        setFilteredComercios(filtered);
    }, [comercios, userInterests]);

    const handleSearch = (searchTerm) => {
        if (!searchTerm) {
            // Cuando searchTerm está vacío, vuelve a filtrar basado en los intereses del usuario
            const interestsFiltered = comercios.filter(comercio => {
                const actividadesComercio = comercio.actividad.toLowerCase().split(',').map(a => a.trim());
                return actividadesComercio.some(actividad => userInterests.includes(actividad));
            });
            setFilteredComercios(interestsFiltered);
        } else {
            const searchLowerCase = searchTerm.toLowerCase();
            const filtered = comercios.filter(comercio => {
                const actividadesComercio = comercio.actividad.toLowerCase().split(',').map(a => a.trim());
                return (
                    (comercio.id.toLowerCase().includes(searchLowerCase) ||
                    comercio.nombreComercio.toLowerCase().includes(searchLowerCase) ||
                    comercio.ciudad.toLowerCase().includes(searchLowerCase) ||
                    comercio.actividad.toLowerCase().includes(searchLowerCase) ||
                    comercio.resumen.toLowerCase().includes(searchLowerCase)) &&
                    actividadesComercio.some(actividad => userInterests.includes(actividad))
                );
            });
            setFilteredComercios(filtered);
        }
    };
    

    return (
        <div className="bg-black flex flex-col items-center justify-center">
            <Search onSearch={handleSearch} />
            <h2 className="text-3xl Font_BodoniBold text-white mt-20 mb-4">Descubre Comercios Destacados</h2>
            <p className="Font_Caslon text-gray-400 text-center max-w-2xl pb-5 mb-10">
                Explora una selección curada de comercios que concuerdan con tus intereses.
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

export default MostrarComerciosPreferencias;

