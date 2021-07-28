import Date from "./date";
import Times from "./times";

const Header = () => {
  return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end"}}>
      <Date />
      <Times />
    </div>
  )
}

export default Header;