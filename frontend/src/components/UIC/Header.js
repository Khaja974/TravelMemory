
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="travel-header">
      <nav className="travel-navbar">
        <Link to="/" className="travel-brand" onClick={closeMenu}>
          <span className="travel-brand-icon" aria-hidden="true">
            ✈
          </span>

          <span className="travel-brand-text">
            Travel<span>Memory</span>
            <small>YOUR JOURNEY, YOUR STORY</small>
          </span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`travel-nav-links ${menuOpen ? "show-menu" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `travel-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/my-experiences"
            className={({ isActive }) =>
              `travel-nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            My Experiences
          </NavLink>

          <Link
            to="/addexperience"
            className="add-experience-btn"
            onClick={closeMenu}
          >
            <span aria-hidden="true">＋</span> Add Experience
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
