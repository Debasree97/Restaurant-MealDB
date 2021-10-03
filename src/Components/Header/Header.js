import { NavLink } from "react-router-dom";

const Header = () => {
  

  return (
    <div>
      <h2>The Meal House</h2>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/restaurants">Restaurant</NavLink>
    </div>
  );
};

export default Header;
