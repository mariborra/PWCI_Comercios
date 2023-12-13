"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import EliminarUsuario from '/src/componentes/EliminarUsuario';

export default function ConfiguracionCuenta({ params }) {
    const router = useRouter();
    const userId = params.id;

    console.log(userId);

    const [city, setCity] = useState("")
    const [interests, setInterests] = useState("")
    const [allowOffers, setAllowOffers] = useState(false)

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        // Carga la información del usuario
        const cargarDatosUsuario = async () => {
            const response = await fetch(`/api/user/user/?id=${userId}`);
            const data = await response.json();
            if (response.ok && data.users) {
                const usuario = data.users.find(u => u.id === userId);
                if (usuario) {
                    setCity(usuario.city);
                    setInterests(usuario.interests);
                    setAllowOffers(usuario.allowOffers);
                }
            }
        };

        cargarDatosUsuario();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        switch (name) {
            case 'city':
                setCity(value);
                break;
            case 'interests':
                setInterests(value);
                break;
            case 'allowOffers':
                setAllowOffers(checked);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/user/update/?id=${userId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ city, interests, allowOffers, id: userId })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Actualización exitosa:', data);
            router.push(`/typesUsers/users/${userId}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleUnsubscribeClick = () => {
        setIsDialogOpen(true);
    };

    const handleDeleteConfirmed = () => {
        console.log('Usuario eliminado');
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            <div className="bg-dark-900 p-6 rounded-lg shadow-lg max-w-md w-full">
                <form onSubmit={handleSubmit}>
                    <h2 className="Font_BodoniBold text-white text-3xl font-bold mb-10 text-center">Configuración de la Cuenta</h2>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="city" className="Font_Caslon block text-sm font-medium text-gray-300">Ciudad</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder={city ? city : 'Ciudad'}
                            value={city}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                        />
                    </div>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="interests" className="Font_Caslon block text-sm font-medium text-gray-300">Intereses</label>
                        <input
                            type="text"
                            id="interests"
                            name="interests"
                            placeholder={interests ? interests : 'Intereses'}
                            value={interests}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            id="allowOffers"
                            name="allowOffers"
                            type="checkbox"
                            checked={allowOffers}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-indigo-600 bg-black border-indigo-700 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:ring-2"
                        />
                        <label htmlFor="allowOffers" className="ml-2 text-sm font-medium text-gray-300">Permitir recibir ofertas</label>
                    </div>

                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">Actualizar Datos</button>
                </form>
                <span className="flex items-center my-7">
                    <span className="h-px flex-1 bg-white"></span>
                    <span className="Font_Caslon shrink-0 px-6">o</span>
                    <span className="h-px flex-1 bg-white"></span>
                </span>

                <button onClick={handleUnsubscribeClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                    Darse de Baja
                </button>

                <EliminarUsuario
                    userId={userId}
                    isMenuOpen={isDialogOpen}
                    setIsMenuOpen={setIsDialogOpen}
                    onDeleteConfirmed={handleDeleteConfirmed}
                />
            </div>
        </div>
    );
}
