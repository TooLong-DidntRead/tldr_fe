import { ReactNode } from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

interface Props {
  logout: () => void;
  user: number;
  children: ReactNode;
}

export const Layout = ({logout, user, children}: Props) => {
  return(
    <>
      <Header logout={logout} user={user}/>
      {children}
      <Footer />
    </>
  )
}
