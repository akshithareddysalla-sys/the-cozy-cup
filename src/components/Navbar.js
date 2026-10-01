import React, { useState } from "react";
import "../styles/_navbar.scss";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();

  const [user] = useState(() => {
    const savedUser = localStorage.getItem("cozyCupUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar custom-navbar">
      <div className="container">

        {/* LOGO */}
        <Link
          className="navbar-brand"
          to="/"
          onClick={closeMenu}
        >
          The Cozy Cup
        </Link>

        {/* HAMBURGER */}
        <button
          className={`navbar-toggler ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU */}
        <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/menu"
                className="nav-link"
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/location"
                className="nav-link"
                onClick={closeMenu}
              >
                Locations
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={closeMenu}
              >
                Our Story
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link cart-link"
                onClick={closeMenu}
              >
                Cart

                {cart.length > 0 && (
                  <span className="cart-count">
                    {cart.reduce(
                      (total, item) =>
                        total + item.qty,
                      0
                    )}
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              {user ? (
                <Link
                  to="/profile"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Profile
                </Link>
              ) : (
                <Link
                  to="/auth"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
              )}
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;