"use client"

import { useParams } from 'next/navigation'
import ComercioDetail from '/src/componentes/ComercioDetail';

function PageComercioUser() {

    const params = useParams()

    return (
        <div className="bg-black rounded-lg shadow-md overflow-hidden">
            <ComercioDetail comercioId={params.idComercios} />
        </div>
    );
}

export default PageComercioUser;