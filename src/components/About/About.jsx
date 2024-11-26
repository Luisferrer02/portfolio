import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mí</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src="/assets/about/information.png" alt="Personal info icon" />
            <div className={styles.aboutItemText}>
              <h3>Datos Personales:</h3>
              <p>
                <strong>Cumpleaños:</strong> 04/10/2002 <br />
                <strong>Teléfono:</strong> 672 227 432 <br />
                <strong>Email:</strong> luisferrer2002@gmail.com <br />
                <strong>Dirección:</strong> Madrid, España <br />
                <strong>Cargo:</strong> Estudiante
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Soy apasionado del desarrollo frontend, trabajando con HTML, CSS y JavaScript. 
                En mis proyectos, he aprendido a crear interfaces responsivas y dinámicas usando 
                frameworks como React.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
