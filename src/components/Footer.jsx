import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-azulNavy text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="ml-10">
                    {/* Texto del copyright */}
                    <p className="text-sm font-space-grotesk text-center md:text-left">
                    &copy; 2025 Gabriel Campos. Todos los derechos reservados.
                    </p>                    
                </div>
                <div className="mr-10">
                    {/* Íconos de redes sociales */}
                    <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-gray-300 hover:text-white text-2xl"
                    >
                        <FaWhatsapp />
                    </a>
                    </div>
                </div>    
            </div>
        </footer>
    );
};

export default Footer;
