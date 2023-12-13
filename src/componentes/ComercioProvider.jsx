"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

const ComercioContext = createContext();

export const useComercio = () => useContext(ComercioContext);

export const ComercioProvider = ({ children }) => {
    const [comercioId, setComercioId] = useState(null);

    useEffect(() => {
        // Cargar el comercioId de localStorage al montar
        const storedComercioId = localStorage.getItem('comercioId');
        if (storedComercioId) {
            setComercioId(storedComercioId);
        }
    }, []);

    useEffect(() => {
        // Actualizar localStorage cuando comercioId cambie
        if (comercioId) {
            localStorage.setItem('comercioId', comercioId);
        }
    }, [comercioId]);

    return (
        <ComercioContext.Provider value={{ comercioId, setComercioId }}>
            {children}
        </ComercioContext.Provider>
    );
};

