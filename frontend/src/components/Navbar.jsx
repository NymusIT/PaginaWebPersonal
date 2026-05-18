import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        NymusIT
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobre-mi">Sobre mí</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </div>
    </nav>
  );
};