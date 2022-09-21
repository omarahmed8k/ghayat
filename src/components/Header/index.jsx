import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import "./style.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          <Link className="header-logo" to="/">
            <Logo />
          </Link>
          <div className={`header-links ${menu ? "open" : ""}`}>
            <NavLink to="/">الرئيسية</NavLink>
            <NavLink activeClassName="active-link" to="/about">
              من نحن
            </NavLink>
            <NavLink activeClassName="active-link" to="/services">
              خدماتنا
            </NavLink>
            <Link className="main-btn" to="/contact">
              تواصل معنا
            </Link>
          </div>
          <button
            className="menu-btn"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
}
