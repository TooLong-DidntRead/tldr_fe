import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ logout, user, children }) => {
  // TODO - add types
  return (
    <>
      <Header logout={logout} user={user} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
