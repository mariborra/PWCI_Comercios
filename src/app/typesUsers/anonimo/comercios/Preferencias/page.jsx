import Link from 'next/link';

function MostrarComerciosPreferenciasAnonimo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            <h1 className="Font_BodoniBold text-4xl text-white mb-4">
                Descubre Comercios Según Tus Preferencias
            </h1>
            <p className="Font_Caslon text-lg text-white text-center mb-10">
                Inicia sesión para personalizar tu experiencia y encontrar comercios que se ajusten a tus intereses.
            </p>
            <Link href="/login/loginUser" className="Font_Caslon bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-900">
                Iniciar Sesión
            </Link>
        </div>
    );
}

export default MostrarComerciosPreferenciasAnonimo;
