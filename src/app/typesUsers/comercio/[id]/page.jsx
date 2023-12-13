"use client"

import { useRouter,useParams } from 'next/navigation'
import ComercioDetail from '/src/componentes/ComercioDetail';


const comercioPage = () => {

    const params = useParams();
    const comercioId = params.id;

    return (
        <div className="bg-black overflow-hidden relative">
            <ComercioDetail comercioId={comercioId} />
        </div>
    );
};

export default comercioPage;

