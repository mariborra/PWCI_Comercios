"use client";

import MostrarComerciosScoring from '/src/componentes/MostrarComerciosScoring';
import { useUser } from '/src/componentes/UserProvider';

function MostrarComercioOrdenadosUser() {

    const { userId } = useUser();

    return (
        <div className="bg-black">
            <MostrarComerciosScoring typeUser={`users/${userId}`}/>
        </div>
    );
}

export default MostrarComercioOrdenadosUser;

