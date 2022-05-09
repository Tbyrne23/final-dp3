import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/songs" activeStyle>
            Songs
          </NavLink>
          <NavLink to="/sponsor" activeStyle>
            Sponsors
          </NavLink>
          <NavLink to="/songsDark" activeStyle>
            SongsDark
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
