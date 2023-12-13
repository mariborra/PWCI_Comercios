"use client";

import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useState, useEffect } from 'react';
import '/src/app/styles/fonts.css';
import { useComercio } from '/src/componentes/ComercioProvider';

const comercioLogin = () => {

    const router = useRouter();

    const [id, setId] = useState("");
    const { setComercioId } = useComercio();

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const redirigir = (code) => {
        console.log("Code", code)
        if (code == 200) {
            setComercioId(id);
            router.push(`/typesUsers/comercio/${id}`)
        } else {
            setAlertMessage("Datos incorrectos. Por favor, inténtalo de nuevo.");
            setShowAlert(true);
        }
    }

    useEffect(() => {
        let timer;
        if (showAlert) {
            timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    
        // Limpieza del temporizador
        return () => clearTimeout(timer);
    }, [showAlert]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const comercio = {
            id: id,
        }

        fetch("/api/comercio/signin", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(comercio)
        })
           .then((res) => res.json())
           .then((data) => redirigir(data.status))
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            {showAlert && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-8 py-5 rounded-lg border border-red-700" role="alert">
                    <strong className="font-bold text-lg">Error</strong>
                    <span className="block sm:inline text-md"> {alertMessage}</span>
                </div>
            )}
            
            <div>
                <Image
                    src="/Iconos/Icono_Blanco.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />
            </div>
            <form onSubmit={handleSubmit} className="bg-dark-900 p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="Font_BodoniBold text-white text-3xl font-bold mb-4 text-center">
                    Iniciar Sesión
                </h2>
                <div className="mb-4 space-y-1">
                    <label htmlFor="id" className="Font_Caslon block text-sm font-medium text-gray-300"> ID </label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        onChange={(e) => setId(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="flex justify-between items-center mb-6">
                    <button type="submit" className="Font_Caslon bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};

export default comercioLogin;

