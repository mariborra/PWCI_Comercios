"use client";

import React from 'react';
import Image from "next/image";

const CardUsuario = ({ nombre, ciudad, intereses, email }) => {
    return (
        <div className="group relative block cursor-pointer p-4 border border-gray-600 hover:border-indigo-600 hover:bg-slate-950 rounded-lg my-2"
            style={{
                width: '100%',
                maxWidth: '350px',
                height: 'auto',
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <div className="text-white text-center">
                <h3 className="Font_BodoniBold text-xl md:text-2xl mb-4">{nombre}</h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Image
                        src="/Iconos/mapPin.png"
                        alt="Ubicación"
                        width={20}
                        height={20}
                    />
                    <p className="Font_Garamond text-md md:text-lg">Ciudad: {ciudad}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Image
                        src="/Iconos/clienteEmpresa.png"
                        alt="Intereses"
                        width={20}
                        height={20}
                    />
                    <p className="Font_Garamond text-md md:text-lg">Intereses: {intereses}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Image
                        src="/Iconos/mailBlanco.png"
                        alt="Email"
                        width={20}
                        height={20}
                    />
                    <p className="Font_Garamond text-md md:text-lg">Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default CardUsuario;
