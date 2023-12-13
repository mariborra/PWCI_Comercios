"use client";

import MostrarComerciosUsuarios from '/src/componentes/MostrarComerciosUsuarios';
import { useUser } from '/src/componentes/UserProvider';

function MostrarComerciosUser() {

    const { userId } = useUser();

    return (
        <div className="bg-black">
            <MostrarComerciosUsuarios typeUser={`users/${userId}`}/>
        </div>
    );
}

export default MostrarComerciosUser;

