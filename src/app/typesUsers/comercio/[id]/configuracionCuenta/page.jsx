"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import EliminarMenu from '/src/componentes/EliminarMenu';
import ConfirmarCambiosComercio from '/src/componentes/ConfirmarCambiosComercio';

export default function ConfiguracionCuenta({ params }) {

    const [showConfirm, setShowConfirm] = useState(false);
    const [showUpdateConfirm, setShowUpdateConfirm] = useState(false);

    const router = useRouter();
    const comercioId = params.id;
    console.log(comercioId);

    const [ciudad, setCiudad] = useState("");
    const [actividad, setActividad] = useState("");
    const [titulo, setTitulo] = useState("");
    const [resumen, setResumen] = useState("");
    const [fotos, setFotos] = useState("");
    const [textos, setTextos] = useState("");

    useEffect(() => {
        // Carga la información del usuario
        const cargarDatosUsuario = async () => {
            const response = await fetch(`/api/comercio/comercio/?id=${comercioId}`);
            const data = await response.json();
            if (response.ok && data.comercios) {
                const comercio = data.comercios.find(u => u.id === comercioId);
                if (comercio) {
                    setCiudad(comercio.ciudad);
                    setActividad(comercio.actividad);
                    setTitulo(comercio.titulo);
                    setResumen(comercio.resumen);
                    setFotos(comercio.fotos);
                    setTextos(comercio.textos);
                }
            }
        };

        cargarDatosUsuario();
    }, [comercioId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'ciudad':
                setCiudad(value);
                break;
            case 'actividad':
                setActividad(value);
                break;
            case 'titulo':
                setTitulo(value);
                break;
            case 'resumen':
                setResumen(value);
                break;
            case 'fotos':
                setFotos(value);
                break;
            case 'textos':
                setTextos(value);
                break;
            default:
                break;
        }
    };

    const handleUpdate = async () => {
        // Objeto para almacenar los datos actualizados
        const updatedData = {};

        // Agregamos cada campo al objeto updatedData solo si se ha cambiado
        if (ciudad !== "") updatedData.ciudad = ciudad;
        if (actividad !== "") updatedData.actividad = actividad;
        if (titulo !== "") updatedData.titulo = titulo;
        if (resumen !== "") updatedData.resumen = resumen;
        if (fotos !== "") updatedData.fotos = fotos.split(',').map(foto => foto.trim());
        if (textos !== "") updatedData.textos = textos.split(',').map(texto => texto.trim());

        try {
            const response = await fetch(`/api/comercio/updateComercio/?id=${comercioId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: comercioId, ...updatedData })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Actualización exitosa:', data);
            router.push(`/typesUsers/comercio/${comercioId}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleSubmitElimination = async () => {
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
                router.push('/');
            } else {
                alert('Hubo un error al eliminar el comercio.');
            }
        } catch (error) {
            console.error('Error al procesar la respuesta JSON:', error);
            alert('La respuesta del servidor no es JSON válido.');
        }
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        setShowUpdateConfirm(true); // Abre el cuadro de diálogo para confirmar
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            <div className="bg-dark-900 p-6 rounded-lg shadow-lg max-w-md w-full">
                <form onSubmit={handleUpdateSubmit}>
                    <h2 className="Font_BodoniBold text-white text-3xl font-bold mb-10 text-center">Configuración del Comercio</h2>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="titulo" className="Font_Caslon block text-sm font-medium text-gray-300">Título</label>
                        <input
                            type="titulo"
                            id="titulo"
                            name="titulo"
                            value={titulo}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                        />
                    </div>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="ciudad" className="Font_Caslon block text-sm font-medium text-gray-300">Ciudad</label>
                        <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            value={ciudad}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                        />
                    </div>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="actividad" className="Font_Caslon block text-sm font-medium text-gray-300">Actividad</label>
                        <input
                            type="text"
                            id="actividad"
                            name="actividad"
                            value={actividad}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                        />
                    </div>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="resumen" className="Font_Caslon block text-sm font-medium text-gray-300">Resumen</label>
                        <input
                            type="resumen"
                            id="resumen"
                            name="resumen"
                            value={resumen}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                        />
                    </div>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="fotos" className="Font_Caslon block text-sm font-medium text-gray-300">Fotos</label>
                        <input
                            type="text"
                            id="fotos"
                            name="fotos"
                            value={fotos}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                        />
                    </div>
                    <div className="mb-4 space-y-1">
                        <label htmlFor="textos" className="Font_Caslon block text-sm font-medium text-gray-300">Textos</label>
                        <input
                            type="text"
                            id="textos"
                            name="textos"
                            value={textos}
                            onChange={handleInputChange}
                            className="Font_Garamond w-full px-4 py-1 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900"
                        />
                    </div>
                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full">Actualizar Datos</button>
                </form>
                <span className="flex items-center my-7">
                    <span className="h-px flex-1 bg-white"></span>
                    <span className="Font_Caslon shrink-0 px-6">o</span>
                    <span className="h-px flex-1 bg-white"></span>
                </span>

                <button onClick={() => setShowConfirm(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full">
                    Darse de Baja
                </button>

                {showUpdateConfirm && (
                    <ConfirmarCambiosComercio
                        isMenuOpen={showUpdateConfirm}
                        setIsMenuOpen={setShowUpdateConfirm}
                        comercioId={comercioId}
                        onConfirmUpdate={handleUpdate}
                    />
                )}

                {showConfirm && (
                    <EliminarMenu
                        isMenuOpen={showConfirm}
                        setIsMenuOpen={setShowConfirm}
                        comercioId={comercioId}
                        onDeleteConfirmed={handleSubmitElimination}
                    />
                )}
            </div>
        </div>
    );
}
