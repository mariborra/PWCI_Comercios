"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from "next/link";
import '/src/app/styles/fonts.css';
import { v4 as uuidv4 } from 'uuid';



const UserRegistration = () => {

    const router = useRouter()

    // Estado inicial del formulario
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [interests, setInterests] = useState("")
    const [allowOffers, setAllowOffers] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();

        const newUserId = uuidv4();

        const user = {
            id: newUserId,
            name: name,
            email: email,
            password: password,
            age: age,
            city: city,
            interests: interests,
            allowOffers: allowOffers,
        }

        fetch("/api/user/signup", {
            method: "POST",
            headers: {
                //Authorization: `Bearer ${tokenJWT}`
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))


        router.push(`/login/loginUser`)
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg max-w-lg w-full">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="Font_BodoniBold text-white text-3xl font-bold mb-2">Registrase como Usuario</h2>
                    <p className="Font_Caslon text-white text-xs mb-4">
                        Ya eres miembro?{' '}
                        <Link href="/login/loginUser" className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out cursor-pointer">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>


                <div className="mb-4 space-y-1">
                    <label htmlFor="name" className="Font_Caslon block text-sm font-medium text-gray-300">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="email" className="Font_Caslon block text-sm font-medium text-gray-300">Email</label>
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
                <div className="mb-4 space-y-1">
                    <label htmlFor="age" className="Font_Caslon block text-sm font-medium text-gray-300">Edad</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        onChange={(e) => setAge(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="city" className="Font_Caslon block text-sm font-medium text-gray-300">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                    />
                </div>
                <div className="mb-4 space-y-1">
                    <label htmlFor="interests" className="Font_Caslon block text-sm font-medium text-gray-300">Intereses</label>
                    <input
                        type="text"
                        id="interests"
                        name="interests"
                        onChange={(e) => setInterests(e.target.value)}
                        className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <input
                        id="allowOffers"
                        name="allowOffers"
                        type="checkbox"
                        onChange={(e) => setAllowOffers(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 bg-black border-indigo-700 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:ring-2"
                    />
                    <label htmlFor="allowOffers" className="ml-2 text-sm font-medium text-gray-300">Permitir recibir ofertas</label>
                </div>
                <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                    Register
                </button>
            </form>
        </div>
    );
};

export default UserRegistration;
