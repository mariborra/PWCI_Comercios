"use client";

import MostrarComerciosScoring from '/src/componentes/MostrarComerciosScoring';
import { useUser } from '/src/componentes/UserProvider';

function MostrarComercioOrdenadosAnonimo() {

    return (
        <div className="bg-black">
            <MostrarComerciosScoring typeUser="anonimo"/>
        </div>
    );
}

export default MostrarComercioOrdenadosAnonimo;

