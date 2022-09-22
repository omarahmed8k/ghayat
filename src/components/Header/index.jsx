import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    });
  }, []);

  return (
    <Fade top>
      <div className={`header ${isDark ? "dark" : ""}`}>
        <div className="container">
          <div className="header-flex">
            <Link className="header-logo" to="/">
              <Logo />
            </Link>
            <div className={`header-links ${menu ? "open" : ""}`}>
              <NavLink
                onClick={() => {
                  setMenu(false);
                }}
                to="/"
              >
                الرئيسية
              </NavLink>
              <NavLink
                onClick={() => {
                  setMenu(false);
                }}
                activeClassName="active-link"
                to="/about"
              >
                من نحن
              </NavLink>
              <NavLink
                onClick={() => {
                  setMenu(false);
                }}
                activeClassName="active-link"
                to="/services"
              >
                خدماتنا
              </NavLink>
              <Link
                onClick={() => {
                  setMenu(false);
                }}
                className="main-btn"
                to="/contact"
              >
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
    </Fade>
  );
}
