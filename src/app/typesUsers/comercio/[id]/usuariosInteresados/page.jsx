"use client";

import { useEffect, useState } from 'react';
import CardUsuario from '/src/componentes/CardUsuario';

const UsuariosInteresadosPage = ({ params }) => {
    const comercioId = params.id;
    console.log(comercioId);
    const [usuarios, setUsuarios] = useState([]);
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

                    console.log(comercio.nombreComercio);

                    filtrarUsuariosInteresados(comercio);
                } else {
                    console.error("Comercio not found");
                }
            } catch (error) {
                console.error("Error fetching comercio data: ", error);
            }
        }

        fetchComercioData();
    }, [comercioId]);

    const filtrarUsuariosInteresados = async (comercio) => {
        try {
            const responseUsuarios = await fetch('/api/user/user');
            const dataUsuarios = await responseUsuarios.json();
    
            if (dataUsuarios && dataUsuarios.users) {
                const usuariosFiltrados = dataUsuarios.users.filter(usuario => {
                    // Divide y normaliza los intereses del usuario
                    const interesesUsuario = usuario.interests 
                        ? usuario.interests.toLowerCase().split(',').map(i => i.trim())
                        : [];
    
                    // Comprueba si el usuario cumple con todos los criterios: misma ciudad, permitir ofertas y tener intereses coincidentes
                    return usuario.city === comercio.ciudad &&
                        usuario.allowOffers &&
                        interesesUsuario.some(interest => comercio.actividad.toLowerCase().includes(interest));
                });
    
                setUsuarios(usuariosFiltrados);
            }
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };
    
    

    return (
        <div className="bg-black mb-20">
            <h1 className="Font_BodoniBold text-3xl text-white text-center mt-20 mb-4">Usuarios Interesados</h1>
            <h2 className="Font_Garamond text-xl text-white text-center mb-10">Personas de tu ciudad interesadas en lo que ofreces</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {usuarios.length > 0 ? (
                    usuarios.map(usuario => (
                        <CardUsuario
                            key={usuario.id}
                            nombre={usuario.name}
                            ciudad={usuario.city}
                            intereses={usuario.interests}
                            email={usuario.email}
                        />
                    ))
                ) : (
                    <p className="Font_Garamond text-white text-center">No hay usuarios interesados en tu ciudad actualmente.</p>
                )}
            </div>
        </div>
    );
    
};

export default UsuariosInteresadosPage;
