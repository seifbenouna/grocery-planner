import React from "react";
import { NavLink } from "react-router";
export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
};

const Logo = () => {
  return <div className="logo">logo</div>;
};
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/grocery-planner" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="shopinglist">Shoping List</NavLink>
        </li>
        <li>
          <NavLink to="archive">Archive</NavLink>
        </li>
      </ul>
    </nav>
  );
};
