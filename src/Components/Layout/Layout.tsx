import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ logout, user, children }) => {
  return (
    <>
      <Header logout={logout} user={user} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
