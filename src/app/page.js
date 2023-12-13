import Navbar from '/src/componentes/Navbar'
import Footer from '/src/componentes/Footer';
import Image from "next/image";
import Link from "next/link";
import '/src/app/styles/fonts.css';
import MostrarComerciosInicio from '/src/componentes/MostrarComerciosInicio';


export default function Home() {
  return (
    <>
      <Navbar userType={'guest'} />
      <main className="bg-black items-center justify-center min-h-screen p-4">
        <div className="flex flex-col items-center justify-center min-h-[85vh]">
          <Image
            src="/Iconos/Icono_Blanco.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <h1 className="Font_BodoniBold bg-gradient-to-r from-blue-300 via-purple-500 to-indigo-600 bg-clip-text text-3xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl mt-5">
            Bienvenido a Comercio360
          </h1>
          <p className="Font_Caslon text-xl text-center mt-3 mb-4">
            Descubre los mejores comercios locales y únete a nuestra comunidad.
          </p>
          <div className="mt-6">
            <Link href="/login" className="Font_Caslon bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-indigo-900">
              Iniciar Sesión
            </Link>
          </div>
        </div>

        <MostrarComerciosInicio typeUser={"anonimo"} />
      </main>
      <Footer />
    </>
  );
}
