import Link from 'next/link';
import Image from 'next/image';

const CardComercioInicio = ({ url, nombreComercio, ciudad, id, imagenUrl }) => {

    return (
        <Link href={url} passHref>
            <div className="group relative block cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative h-[350px] sm:h-[450px]">
                    <Image
                        src={imagenUrl}
                        alt={`${nombreComercio} cover`}
                        layout="fill"
                        priority
                        objectFit="cover"
                        className="group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
    
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="Font_BodoniBold text-2xl md:text-3xl text-white mb-2">{nombreComercio}</h3>
                    {ciudad && (
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/Iconos/locationPin.png"
                                alt="Ubicación"
                                width={24}
                                height={24}
                            />
                            <p className="Font_Garamond text-lg md:text-xl text-white">{ciudad}</p>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
    
};

export default CardComercioInicio;
