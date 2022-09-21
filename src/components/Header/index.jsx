import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import "./style.css";

export default function Header() {
  const [menu, setMenu] = useState(true);
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          <div className="header-links">
            {menu && (
              <button onClick={setMenu(!menu)}>
                <Menu />
              </button>
            )}
            <Link className="main-btn" to="/contact">
              تواصل معنا
            </Link>
            <NavLink activeClassName="active-link" to="/services">
              خدماتنا
            </NavLink>
            <NavLink activeClassName="active-link" to="/about">
              من نحن
            </NavLink>
            <NavLink to="/">الرئيسية</NavLink>
          </div>
          <Link className="header-logo" to="/">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  );
}
