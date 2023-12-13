"use client";

import MostrarComercios from '/src/componentes/MostrarComercios';
import { useComercio } from '/src/componentes/ComercioProvider';

function MostrarComerciosComercios() {

    const { comercioId } = useComercio();

    return (
        <div className="bg-black">
            <MostrarComercios typeUser={`comercio/${comercioId}`}/>
        </div>
    );
}

export default MostrarComerciosComercios;

