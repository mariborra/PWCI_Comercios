import Link from 'next/link';
import Image from 'next/image';

const CardComercio = ({ url, nombreComercio, titulo, id, imagenUrl }) => {

    const isDefaultImage = imagenUrl === '/FotosComercios/default.png';

    return (
        <Link href={url} passHref>
            <div className="group relative block cursor-pointer">
                <div className="relative h-[350px] sm:h-[450px]">
                    <Image
                        src={imagenUrl}
                        alt={`${nombreComercio} cover`}
                        layout="fill"
                        priority 
                        objectFit="cover"
                        className="opacity-70"
                        sizes="(max-width: 768px) 100vw, 50vw" 
                    />
                </div>

                <div className={`absolute inset-0 flex flex-col items-start justify-end p-6 ${isDefaultImage ? 'bg-gradient-to-t from-indigo-500/70 to-transparent' : ''}`}>
                    <h3 className="Font_BodoniBold text-3xl font-medium text-white">{nombreComercio}</h3>
                    {titulo && (
                        <p className="Font_Garamond mt-1.5 max-w-[40ch] text-xl text-white">{titulo}</p>
                    )}

                    <span className="Font_BodoniBold text-center bg-indigo-900 hover:bg-indigo-600 transition-colors duration-300 text-white font-bold py-2 px-4 rounded block mt-4">
                        Ver Más
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CardComercio;
