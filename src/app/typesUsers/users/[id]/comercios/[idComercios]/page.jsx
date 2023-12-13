"use client"

import { useRouter,useParams } from 'next/navigation'
import { useState } from 'react';
import ComercioDetail from '/src/componentes/ComercioDetail';
import ResenyaMenu from '/src/componentes/ResenyaMenu';

function PageComercioUser() {

    const params = useParams();
    const [showConfirm, setShowConfirm] = useState(false);
    const router = useRouter();
    const comercioId = params.idComercios;

    const onReviewSubmitted = async (comercioId, resena, puntuacion) => {
        try {
            // Asegúrate de que la puntuación se convierta a String si es necesario
            const puntuacionString = puntuacion.toString();

            const response = await fetch(`/api/comercio/update`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id: comercioId, 
                    nuevaResena: resena, 
                    nuevaPuntuacion: puntuacionString 
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Reseña y puntuación agregadas con éxito:', data);
            setShowConfirm(false);
            router.push(`/typesUsers/users/${params.id}/comercios/${comercioId}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-black overflow-hidden relative">
            <ComercioDetail comercioId={comercioId} />

            {/* Icono de reseña */}
            <div className="absolute top-4 right-4">
                <button onClick={() => setShowConfirm(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                    </svg>
                </button>
            </div>

            {/* Componente para añadir una reseña */}
            {showConfirm && (
                <ResenyaMenu
                    isMenuOpen={showConfirm}
                    setIsMenuOpen={setShowConfirm}
                    comercioId={comercioId}
                    onReviewSubmitted={onReviewSubmitted}
                />
            )}
        </div>
    );
}

export default PageComercioUser;