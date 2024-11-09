// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/466001894_122185196120221306_890188372140458981_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOSFRK7zgQ-MKFICI9MnaT7NOTFru9FQrs05MWu70VCmIGCe8N52Haq6Vh9WXgYZWcNUo8WPcyIzkPVG5xsuo_&_nc_ohc=NkT8EHTDqF8Q7kNvgFqCaQi&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=A5gon4D9WHB1X4PDaqWonVw&oh=00_AYClxJXlEfP9uTVLyBS5hroF_awCen9RLU3MANzYprsd3w&oe=67336E34" alt="Logo" /> {/* Reemplaza con la ruta de tu logo */}
      </div>
      <ul className="navbar-links">
        <li><a href="src/app/Contenido/page.js">Contenido</a></li>
        <li><a href="#redes">Redes</a></li>
        <li><a href="#asesorias">Asesorías</a></li>
        <li><a href="#pro">PRO</a></li>
        <li><a href="#tienda">Tienda</a></li>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="🔍 Search"
          onChange={(e) => onSearch(e.target.value)} // Captura el texto ingresado
        />
      </div>
    </nav>
  );
};

export default Navbar;
