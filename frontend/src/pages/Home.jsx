import { useEffect, useState } from "react";

export const Home = () => {
  const [message, setMessage] = useState("Cargando backend...");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/hello`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("No se pudo conectar con el backend."));
  }, []);

  return (
    <section className="home">
      <div className="hero">
        <p className="hero-tag">Full Stack Developer Junior</p>
        <h1>Hola, soy NymusIT</h1>
        <p>
          Creo páginas web modernas, aplicaciones full stack y soluciones
          digitales con React, Flask y APIs.
        </p>

        <div className="hero-actions">
          <a href="/proyectos" className="btn-primary">Ver proyectos</a>
          <a href="/contacto" className="btn-secondary">Contactar</a>
        </div>
      </div>

      <div className="card">
        <h2>Mensaje desde Flask</h2>
        <p>{message}</p>
      </div>
    </section>
  );
};