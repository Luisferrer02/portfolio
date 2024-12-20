import React, { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "/portfolio/assets/nav/closeIcon.png"
              : "/portfolio/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#experience">Habilidades y Experiencia</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
