import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-celeste p-4 flex justify-between items-center">
            <div className="text-azulNavy text-2xl font-bold">LOGO</div>
            <div className="flex space-x-6 text-azulNavy text-lg">
                <Link to="/">Inicio</Link>
                <Link to="/sobre-mi">Sobre Mí</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contacto</Link>
            </div>
        </nav>
    );
};

export default Navbar;