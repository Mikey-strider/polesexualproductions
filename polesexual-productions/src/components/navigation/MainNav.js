import { NavLink } from "react-router-dom"
import { MainLink } from "./components";

const MainNav = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <NavLink to="/" component={MainLink} >Home</NavLink>
      <NavLink to="/about" component={MainLink}>About</NavLink>
    </div>
  )
}

export default MainNav;