import Image from "next/image";
import MostrarComerciosInicio from '/src/componentes/MostrarComerciosInicio';

const adminPage = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-black">
            <div className="flex flex-col items-center justify-center min-h-[85vh]">
                <Image
                    src="/Iconos/Icono_Blanco.png"
                    alt="Logo"
                    width={50}
                    height={50}
                />

                <h1 className="Font_BodoniBold bg-gradient-to-r from-blue-300 via-purple-500 to-indigo-600 bg-clip-text text-3xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl mt-5">
                    Área de Administración
                </h1>
                <p className="Font_Caslon text-xl text-center mt-3 mb-4">
                    Gestiona y supervisa los comercios de la plataforma. Aquí puedes crear, editar y eliminar comercios.
                </p>
            </div>

            <MostrarComerciosInicio typeUser="admin" />

        </div>
    );
};

export default adminPage;

