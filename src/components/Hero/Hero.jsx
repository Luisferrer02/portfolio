import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Luis Ferrer</h1>
        <p className={styles.description}>
        Estudiante de Ingeniería de Software apasionado por la tecnología y la ciencia de datos. Me especializo en desarrollo web y análisis de datos, combinando creatividad y funcionalidad para crear soluciones innovadoras. Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y crecer.
        </p>
        <div className={styles.buttonGroup}>
          {/* Línea 1: Botón CV */}
          <a
            href="/data/CVLuisFerrerFinal.pdf"
            download="LuisFerrerCV.pdf"
            className={styles.cvBtn}
          >
            Descargar CV
            <img
              src="/portfolio/assets/hero/download.png"
              alt="Download Icon"
              className={styles.icon}
            />
          </a>

          {/* Línea 2: Otros botones */}
          <div className={styles.contactButtons}>
            <a
              href="mailto:luisferrer2002@gmail.com"
              className={styles.contactBtn}
            >
              Contact Me
              <img
                src="/portfolio/assets/contact/emailIcon.png"
                alt="Email Icon"
                className={styles.icon}
              />
            </a>
            <a
              href="https://github.com/luisferrer02"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              GitHub
              <img
                src="/portfolio/assets/contact/githubIcon.png"
                alt="GitHub Icon"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-ferrer-0a54731b1/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              LinkedIn
              <img
                src="/portfolio/assets/contact/linkedinIcon.png"
                alt="LinkedIn Icon"
                className={styles.icon}
              />
            </a>
          </div>
        </div>

      </div>
      <img
        src="/portfolio/assets/hero/heroImage.jpg"
        alt="Mi foto"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
