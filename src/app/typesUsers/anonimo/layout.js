import Navbar from '/src/componentes/Navbar'
import Footer from '/src/componentes/Footer';


const Layout_Anonimo = ({ children, userType = 'guest' }) => {
  return (
    <>
      <Navbar userType={userType} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout_Anonimo;

