"use client";

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { useUser } from '/src/componentes/UserProvider';

const UserMenu = ({ isMenuOpen, setIsMenuOpen }) => {

    const { userId } = useUser();

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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-6 py-6 text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:p-8">
                                <ul className="space-y-4 p-4">
                                    <li>
                                        <Link
                                            href={`/typesUsers/users/${userId}/configuracionCuenta`}
                                            className="Font_Garamond flex items-center gap-2 text-indigo-500 hover:text-indigo-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-75"
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
                                            Ver Cuenta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="Font_Garamond flex items-center gap-2 text-red-500 hover:text-red-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                />
                                            </svg>
                                            Salir
                                        </Link>
                                    </li>
                                </ul>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default UserMenu;
