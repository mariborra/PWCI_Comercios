import Navbar from '/src/componentes/Navbar'
import Footer from '/src/componentes/Footer';


const Layout_Admin = ({ children, userType = 'admin' }) => {
  return (
    <>
      <Navbar userType={userType} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout_Admin;

