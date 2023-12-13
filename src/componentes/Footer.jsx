import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-indigo-500">
            <div className="container mx-auto px-6 py-4 flex flex-wrap justify-center items-center">
                {/* Bloque izquierdo */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                    <div>
                        <Image
                            src="/Iconos/Icono_Blanco.png"
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </div>
                    <p className="Font_Caslon text-gray-400 my-2">
                        Conectando tu ciudad con los mejores comercios locales, fomentando una comunidad más unida.
                    </p>
                    <div className="flex space-x-4 my-2">
                        <Link href="https://www.facebook.com" passHref>
                            <Image
                                src="/Iconos/IconosRedes/facebook.png"
                                alt="Facebook"
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Link href="https://www.instagram.com" passHref>
                            <Image
                                src="/Iconos/IconosRedes/instagram.png"
                                alt="Instagram"
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Link href="https://www.twitter.com" passHref>
                            <Image
                                src="/Iconos/IconosRedes/twitter.png"
                                alt="Twitter"
                                width={25}
                                height={25}
                            />
                        </Link>
                        <Link href="https://www.github.com" passHref>
                            <Image
                                src="/Iconos/IconosRedes/github.png"
                                alt="GitHub"
                                width={25}
                                height={25}
                            />
                        </Link>
                    </div>
                </div>
                {/* Bloque derecho */}
                <div className="flex-1 flex justify-center space-x-12 items-center">
                    <div className="text-gray-400">
                        <h3 className="Font_Garamond uppercase font-bold mb-2">Boring Stuff</h3>
                        <p className="Font_Garamond">LEGAL NOTICE</p>
                        <p className="Font_Garamond">PRIVACY POLICY</p>
                        <p className="Font_Garamond">TERMS</p>
                    </div>
                    <div className="Font_Garamond text-gray-400">
                        <h3 className="uppercase font-bold mb-2">Support</h3>
                        <p className="Font_Garamond">DONATIONS</p>
                        <p className="Font_Garamond">FAQ</p>
                        <p className="Font_Garamond">CONTACT</p>
                    </div>
                </div>
            </div>
            <div className="Font_Caslon text-gray-400 text-center py-4 border-t border-indigo-500">
                <p>© Comercio360</p>
            </div>
        </footer>
    );
};

export default Footer;



