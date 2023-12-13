import './globals.css';
import { Inter } from 'next/font/google';
import { UserProvider } from '/src/componentes/UserProvider';
import { ComercioProvider } from '/src/componentes/ComercioProvider';

export const metadata = {
  title: "Comercio360",
  description: "Conecta con tiendas locales.",
  keywords: "tienda, online, commerce"
}

export default function RootLayout({ children }) {
  return (
    <ComercioProvider>
      <UserProvider>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </UserProvider>
    </ComercioProvider>
  );
}
