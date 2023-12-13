"use client";

import { useState, useEffect } from 'react';
import { useUser } from '/src/componentes/UserProvider';
import MostrarComerciosInicio from '/src/componentes/MostrarComerciosInicio';
import Image from "next/image";

const UserPage = () => {

    const { userId } = useUser();

    const [name, setName] = useState(false);

    useEffect(() => {
        // Carga la información del usuario
        const cargarDatosUsuario = async () => {
            const response = await fetch(`/api/user/user/?id=${userId}`);
            const data = await response.json();
            if (response.ok && data.users) {
                const usuario = data.users.find(u => u.id === userId);
                if (usuario) {
                    setName(usuario.name);
                }
            }
        };

        cargarDatosUsuario();
    }, [userId]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            <div className="flex flex-col items-center justify-center min-h-[85vh]">
                <Image
                    src="/Iconos/Icono_Blanco.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />

                <h1 className="Font_BodoniBold bg-gradient-to-r from-blue-300 via-purple-500 to-indigo-600 bg-clip-text text-3xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl mt-5">
                    Bienvenido {name} a Comercio360
                </h1>
                <p className="Font_Caslon text-xl text-center mt-3 mb-4">
                    Explora comercios personalizados según tus gustos e intereses.
                </p>
            </div>

            <MostrarComerciosInicio typeUser={`users/${userId}`} />

        </div>
    );
};

export default UserPage;
