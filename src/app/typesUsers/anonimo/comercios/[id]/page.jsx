"use client"

import ComercioDetail from '/src/componentes/ComercioDetail';

function PageComercioGuest({ params }) {

    const comercioId = params.id; 
    console.log(comercioId);

    return (
        <div className="bg-black rounded-lg shadow-md overflow-hidden">
            <ComercioDetail comercioId={comercioId} />
        </div>
    );
}

export default PageComercioGuest;