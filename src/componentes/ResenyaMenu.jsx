"use client";

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState, useEffect } from 'react';

const ResenyaMenu = ({ comercioId, isMenuOpen, setIsMenuOpen, onReviewSubmitted }) => {
    const [resena, setResena] = useState('');
    const [puntuacion, setPuntuacion] = useState(0);

    const handleSubmit = () => {
        onReviewSubmitted(comercioId, resena, puntuacion);
        setResena('');
        setPuntuacion(0);
    };

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <svg
                    key={i}
                    onClick={() => setPuntuacion(i)}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 cursor-pointer ${i <= puntuacion ? 'text-yellow-500' : 'text-indigo-500'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.903 0l1.615 4.97 5.022.145c.942.027 1.32 1.204.636 1.818l-3.656 3.356 1.087 5.004c.156.717-.587 1.26-1.17.92l-4.502-2.369-4.502 2.369c-.583.34-1.326-.203-1.17-.92l1.087-5.004-3.656-3.356c-.684-.614-.306-1.791.636-1.818l5.022-.145 1.615-4.97z"
                    />
                </svg>
            );
        }
        return stars;
    };


    return (
        <Transition.Root show={isMenuOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsMenuOpen(false)}>

                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child>
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-12 py-10 text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                                <Dialog.Title as="h3" className="Font_BodoniBold text-4xl leading-6 mb-5 font-medium text-white">
                                    Añadir una reseña
                                </Dialog.Title>
                                <p className="Font_Garamond text-lg">¿Qué puntuación le das?</p>
                                <div className="my-2 flex justify-center space-x-1">
                                    {renderStars()}
                                </div>
                                <p className="Font_Garamond text-lg">¿Quieres poner una reseña?</p>
                                <div>
                                    <textarea
                                        className="Font_Garamond w-full px-4 py-2 my-4 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                                        placeholder="Escribe tu reseña aquí"
                                        value={resena}
                                        onChange={(e) => setResena(e.target.value)}
                                    />
                                </div>
                                <div className="mt-2">
                                    <button
                                        type="button"
                                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-3 rounded-md"
                                        onClick={handleSubmit}
                                    >
                                        Enviar Reseña
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ResenyaMenu;

