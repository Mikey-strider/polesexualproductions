import { NavLink } from "react-router-dom"
import { MainWrapper } from "../styled";
import { MainLink } from "./components";

const MainNav = () => {
  return (
    <MainWrapper>
      <NavLink to="/" component={MainLink} >Home</NavLink>
      <NavLink to="/about" component={MainLink}>About</NavLink>
    </MainWrapper>
  )
}

export default MainNav;