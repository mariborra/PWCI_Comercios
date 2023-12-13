import Navbar from '/src/componentes/Navbar'
import Footer from '/src/componentes/Footer';


const Layout_User = ({ children, userType = 'registeredUser' }) => {
  return (
    <>
      <Navbar userType={userType} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout_User;

