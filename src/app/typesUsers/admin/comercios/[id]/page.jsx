"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import ComercioDetail from '/src/componentes/ComercioDetail';
import EliminarMenu from '/src/componentes/EliminarMenu';

function PageComercioAdmin({ params }) {
    const [showConfirm, setShowConfirm] = useState(false);
    const router = useRouter();
    const comercioId = params.id;
    console.log(comercioId);

    const handleSubmit = async () => {
        const res = await fetch(`/api/admin/deleteComercio`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: comercioId })
        });
    
        console.log("Respuesta del servidor:", res);
    
        if (!res.ok) {
            console.error('Error en la respuesta del servidor');
            alert('Hubo un error al eliminar el comercio.');
            return;
        }
    
        try {
            const data = await res.json();
            console.log("Datos recibidos:", data);
    
            if (data.status === 200) {
                router.push('/typesUsers/admin/comercios');
            } else {
                alert('Hubo un error al eliminar el comercio.');
            }
        } catch (error) {
            console.error('Error al procesar la respuesta JSON:', error);
            alert('La respuesta del servidor no es JSON válido.');
        }
    };    

    return (
        <div className="bg-black overflow-hidden relative">
            <ComercioDetail comercioId={comercioId} />
            
            {/* Icono de papelera */}
            <div className="absolute top-4 right-4">
                <button onClick={() => setShowConfirm(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Componente para confirmar la eliminación */}
            {showConfirm && (
                <EliminarMenu
                    isMenuOpen={showConfirm}
                    setIsMenuOpen={setShowConfirm}
                    comercioId={comercioId}
                    onDeleteConfirmed={handleSubmit}
                />
            )}
        </div>
    );
}

export default PageComercioAdmin;
