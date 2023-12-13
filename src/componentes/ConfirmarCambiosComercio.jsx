"use client";

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const ConfirmarCambiosComercio = ({ isMenuOpen, setIsMenuOpen, comercioId, onConfirmUpdate }) => {
    const [inputId, setInputId] = useState('');

    const handleConfirmUpdate = () => {
        if (inputId === comercioId) {
            onConfirmUpdate();
            setIsMenuOpen(false);
        } else {
            alert("El ID no coincide.");
        }
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-6 py-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-8">
                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                                    Confirmar Actualización
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Por favor, ingresa el ID del comercio para confirmar su actualización.
                                    </p>
                                    <input
                                        type="text"
                                        className="Font_Garamond w-full px-4 py-2 my-4 bg-black text-white border border-indigo-500 rounded focus:outline-none focus:bg-gray-900 focus:border-indigo-400"
                                        placeholder="ID del comercio"
                                        value={inputId}
                                        onChange={(e) => setInputId(e.target.value)}
                                    />
                                </div>
                                <div className="mt-2">
                                    <button
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 mr-2 rounded-md"
                                        onClick={handleConfirmUpdate}
                                    >
                                        Actualizar
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-3 rounded-md"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Cancelar
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

export default ConfirmarCambiosComercio;

