"use client";

import MostrarComerciosPreferencias from '/src/componentes/MostrarComerciosPreferencias';
import { useUser } from '/src/componentes/UserProvider';

function MostrarComerciosPreferenciasUser() {

    const { userId } = useUser();

    return (
        <div className="bg-black">
            <MostrarComerciosPreferencias typeUser={`users/${userId}`} userId={userId}/>
        </div>
    );
}

export default MostrarComerciosPreferenciasUser;

