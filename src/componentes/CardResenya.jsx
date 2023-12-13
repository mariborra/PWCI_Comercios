import Link from 'next/link';
import Image from 'next/image';

const CardResenya = ({ resenya, nombreComercio, url }) => {
    return (
        <Link href={url} passHref className="block rounded-lg shadow-lg text-white">
            <div className="flex items-center mb-2">
                <Image
                    src={"/Iconos/quote.png"}
                    alt="Comillas"
                    width={30}
                    height={30}
                />
            </div>
            <p className="Font_Garamond text-md text-justify mb-4">{resenya}</p>
            <p className="Font_Garamond text-md font-bold text-xl">{nombreComercio}</p>
        </Link>
    );
};

export default CardResenya;
