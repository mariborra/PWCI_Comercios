"use client";

import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import '/src/app/styles/fonts.css';
import { useUser } from '/src/componentes/UserProvider'; 


const UserLogin = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setUserId } = useUser();

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

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
        const user = {
            email: email,
            password: password,
        };

        fetch("/api/user/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    setUserId(data.user.id);
                    router.push(`/typesUsers/users/${data.user.id}`);
                } else {
                    setAlertMessage("Datos incorrectos. Por favor, inténtalo de nuevo.");
                    setShowAlert(true);
                }
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);
                alert('Hubo un error al procesar su solicitud.');
            });
    };

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
                    <label htmlFor="email" className="Font_Caslon block text-sm font-medium text-gray-300"> Email </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="password" className="Font_Caslon block text-sm font-medium text-gray-300">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="flex justify-between items-center mb-6">
                    <button type="submit" className="Font_Caslon bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                        Iniciar Sesión
                    </button>
                </div>
                <p className="Font_Caslon text-xs text-white text-center">
                    No eres miembro?
                    <Link href="/login/registerUser" className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out">
                        {' '}Regístrate Aquí
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default UserLogin;

