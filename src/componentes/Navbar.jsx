"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import '/src/app/styles/fonts.css';
import AdminMenu from '/src/componentes/AdminMenu';
import UserMenu from '/src/componentes/UserMenu';
import ComercioMenu from '/src/componentes/ComercioMenu';
import { useUser } from '/src/componentes/UserProvider';
import { useComercio } from '/src/componentes/ComercioProvider';

const Navbar = ({ userType }) => {

    const [isMenuOpenAdmin, setIsMenuOpenAdmin] = useState(false);
    const [isMenuOpenUser, setIsMenuOpenUser] = useState(false);
    const [isMenuOpenComercio, setIsMenuComercio] = useState(false);

    const [imageSrc, setImageSrc] = useState("/Iconos/usuarioBorde.png");
    
    const { userId } = useUser();
    const { comercioId } = useComercio();

    const handleUserIconClickAdmin = () => {
        setIsMenuOpenAdmin(!isMenuOpenAdmin);
    };

    const handleUserIconClickUser = () => {
        setIsMenuOpenUser(!isMenuOpenUser);
    };

    const handleUserIconClickComercio = () => {
        setIsMenuComercio(!isMenuOpenComercio);
    };

    return (
        <>
            <nav className="bg-black shadow-lg p-3 border-b border-indigo-500">
                <div className="container mx-auto flex justify-between items-center">
                    {userType === 'admin' && (
                        /* Enlaces para administrador */
                        <>
                            {/* Sección izquierda*/}
                            <div className="flex items-center flex-1">
                                <Link href="/typesUsers/admin/comercios" className="Font_Garamond text-white px-3 py-2 rounded-md text-lg flex items-center">
                                    <Image
                                        src="/Iconos/comercio.png"
                                        alt="Inicio Sesión"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="ml-2">Comercios</span>
                                </Link>
                            </div>

                            {/* Sección central*/}
                            <div className="flex-grow text-center hidden md:flex md:items-center md:justify-center">
                                <Link href="/typesUsers/admin" className="flex items-center space-x-2">
                                    <span className="Font_BodoniBold text-2xl tracking-tight">Comercio360</span>
                                </Link>
                            </div>

                            {/* Sección derecha*/}
                            <div className="flex items-center space-x-4 flex-1 justify-end">
                                <div
                                    onMouseOver={() => setImageSrc("/Iconos/usuarioBlanco.png")}
                                    onMouseOut={() => setImageSrc("/Iconos/usuarioBorde.png")}
                                    onClick={handleUserIconClickAdmin}
                                    className="cursor-pointer"
                                >
                                    <Image
                                        src={imageSrc}
                                        alt="Cuenta"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                {isMenuOpenAdmin && <AdminMenu isMenuOpen={isMenuOpenAdmin} setIsMenuOpen={setIsMenuOpenAdmin} />}
                            </div>
                        </>
                    )}
                    {userType === 'commerce' && (
                        /* Enlaces para comercios */
                        <>
                            {/* Sección izquierda*/}
                            <div className="flex items-center flex-1">
                                <Link href={`/typesUsers/comercio/${comercioId}/comercios`} className="Font_Garamond text-white px-3 py-2 rounded-md text-lg flex items-center">
                                    <Image
                                        src="/Iconos/comercio.png"
                                        alt="Inicio Sesión"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="ml-2">Comercios</span>
                                </Link>
                            </div>

                            {/* Sección central*/}
                            <div className="flex-grow text-center hidden md:flex md:items-center md:justify-center">
                                <Link href={`/typesUsers/comercio/${comercioId}`} className="flex items-center space-x-2">
                                    <span className="Font_BodoniBold text-2xl tracking-tight">Comercio360</span>
                                </Link>
                            </div>

                            {/* Sección derecha*/}
                            <div className="flex items-center space-x-4 flex-1 justify-end">
                                <div
                                    onMouseOver={() => setImageSrc("/Iconos/usuarioBlanco.png")}
                                    onMouseOut={() => setImageSrc("/Iconos/usuarioBorde.png")}
                                    onClick={handleUserIconClickComercio}
                                    className="cursor-pointer"
                                >
                                    <Image
                                        src={imageSrc}
                                        alt="Cuenta"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                {isMenuOpenComercio && <ComercioMenu isMenuOpen={isMenuOpenComercio} setIsMenuOpen={setIsMenuComercio} />}
                            </div>
                        </>
                    )}
                    {userType === 'registeredUser' && (
                        /* Enlaces para usuarios registrados */
                        <>
                            {/* Sección izquierda*/}
                            <div className="flex items-center flex-1">
                                <Link href={`/typesUsers/users/${userId}/comercios`} className="Font_Garamond text-white px-3 py-2 rounded-md text-lg flex items-center">
                                    <Image
                                        src="/Iconos/comercio.png"
                                        alt="Inicio Sesión"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="ml-2">Comercios</span>
                                </Link>
                            </div>

                            {/* Sección central*/}
                            <div className="flex-grow text-center hidden md:flex md:items-center md:justify-center">
                                <Link href={`/typesUsers/users/${userId}`} className="flex items-center space-x-2">
                                    <span className="Font_BodoniBold text-2xl tracking-tight">Comercio360</span>
                                </Link>
                            </div>

                            {/* Sección derecha*/}
                            <div className="flex items-center space-x-4 flex-1 justify-end">
                                <div
                                    onMouseOver={() => setImageSrc("/Iconos/usuarioBlanco.png")}
                                    onMouseOut={() => setImageSrc("/Iconos/usuarioBorde.png")}
                                    onClick={handleUserIconClickUser}
                                    className="cursor-pointer"
                                >
                                    <Image
                                        src={imageSrc}
                                        alt="Cuenta"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                {isMenuOpenUser && <UserMenu isMenuOpen={isMenuOpenUser} setIsMenuOpen={setIsMenuOpenUser} />}
                            </div>
                        </>
                    )}
                    {userType === 'guest' && (
                        // Enlaces para usuarios invitados
                        <>
                            {/* Sección izquierda*/}
                            <div className="flex items-center">
                                <Link href="/typesUsers/anonimo/comercios" className="Font_Garamond text-white px-3 py-2 rounded-md text-lg flex items-center">
                                    <Image
                                        src="/Iconos/comercio.png"
                                        alt="Inicio Sesión"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="ml-2">Comercios</span>
                                </Link>
                            </div>

                            {/* Sección central*/}
                            <div className="flex-grow text-center hidden md:flex md:items-center md:justify-center">
                                <Link href="/" className="flex items-center space-x-2">
                                    <span className="Font_BodoniBold text-2xl tracking-tight">Comercio360</span>
                                </Link>
                            </div>

                            {/* Sección derecha*/}
                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="Font_Garamond text-white px-3 py-2 rounded-md text-lg flex items-center">
                                    <span className="mr-2">Inicio Sesión</span>
                                    <Image
                                        src="/Iconos/login.png"
                                        alt="Inicio Sesión"
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav >
        </>
    );
};

export default Navbar;
