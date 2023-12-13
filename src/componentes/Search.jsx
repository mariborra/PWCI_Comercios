"use client"

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Search = ({ onSearch }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setLocalSearchTerm(value);
        onSearch(value);
    };

    const handleClear = () => {
        setLocalSearchTerm('');
        onSearch('');
    };

    return (
        <div className="w-full">
            <div className="relative w-full">
                <div className="flex items-center w-full bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 py-2 px-3">
                    <div className="mr-2">
                        <Image
                            src="/Iconos/search.png"
                            alt="Start search"
                            width={14}
                            height={14}
                        />
                    </div>
                    <input
                        className="Font_Caslon text-sm appearance-none bg-transparent w-full text-white leading-tight focus:outline-none"
                        type="text"
                        placeholder="search..."
                        aria-label="Buscar comercios"
                        value={localSearchTerm}
                        onChange={handleChange}
                    />
                    {localSearchTerm && (
                        <button
                            className="Font_Caslon text-sm flex-shrink-0 text-indigo-900 hover:text-indigo-700"
                            type="button"
                            onClick={handleClear}
                        >
                            <Image
                                src="/Iconos/cross.png"
                                alt="Clear search"
                                width={17}
                                height={17}
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
