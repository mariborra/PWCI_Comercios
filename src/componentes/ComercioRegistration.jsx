"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from "next/link";
import '/src/app/styles/fonts.css';
import { v4 as uuidv4 } from 'uuid';


const comercioRegistration = () => {

    const router = useRouter()

    // Estado inicial del formulario
    const [nombreComercio, setNombreComercio] = useState("")
    const [cif, setCif] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")

    // Estados de la visibilidad de la alerta
    const [showAlert, setShowAlert] = useState(false);
    const [comercioId, setComercioId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComercioId = uuidv4();

        const comercio = {
            id: newComercioId,
            nombreComercio: nombreComercio,
            cif: cif,
            direccion: direccion,
            email: email,
            telefono: telefono,
            ciudad: '',
            actividad: '',
            titulo: '',
            resumen: '',
            textos: [],
            fotos: [],
            scoring: [],
            numeroDePuntuaciones: 0,
            reseñas: [],
        };

        fetch("/api/comercio/signup", {
            method: "POST",
            headers: {
                //Authorization: `Bearer ${tokenJWT}`
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comercio)
        })
            .then((res) => res.json())
            .then((data) => {
                setShowAlert(true);
                setComercioId(newComercioId);

                // Delay hiding the alert and redirecting
                setTimeout(() => {
                    setShowAlert(false);
                    router.push(`/typesUsers/admin/comercios/${newComercioId}`);
                }, 3000);
            });
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            {showAlert && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-black px-8 py-5 rounded-lg border border-indigo-700" role="alert">
                    <strong className="font-bold text-lg">Registrado!</strong>
                    <span className="block sm:inline text-md"> ID del comercio: {comercioId}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg max-w-lg w-full">

                <div className="flex flex-col items-center justify-center">
                    <h2 className="Font_BodoniBold text-white text-3xl font-bold mb-2">Registrar Comercio</h2>

                    <p className="Font_Caslon text-white text-xs mb-4">
                        ¿Ya tienes un comercio registrado?{' '}
                        <Link href="/login/loginComercio" className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out cursor-pointer">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="nombreComercio" className="Font_Caslon block text-sm font-medium text-gray-300">Nombre del comercio</label>
                    <input
                        type="text"
                        id="nombreComercio"
                        name="nombreComercio"
                        value={nombreComercio}
                        onChange={(e) => setNombreComercio(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-2 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="cif" className="Font_Caslon block text-sm font-medium text-gray-300">CIF</label>
                    <input
                        type="text"
                        id="cif"
                        name="cif"
                        value={cif}
                        onChange={(e) => setCif(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-2 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="direccion" className="Font_Caslon block text-sm font-medium text-gray-300">Dirección</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-2 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="email" className="Font_Caslon block text-sm font-medium text-gray-300">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-2 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="email" className="Font_Caslon block text-sm font-medium text-gray-300">Teléfono de Contacto</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-2 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default comercioRegistration;
