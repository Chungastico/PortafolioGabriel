import React from "react";

const HeroHome = () => {
    return (
        <section
            className="bg-celeste flex flex-col items-center justify-start text-center p-6"
            style={{
                backgroundImage: "url('/assets/images/EdificiosRojo.png')",
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                height: "120vh", // Para pantallas grandes
            }}
        >
            <div className="text-center sm:mt-0 mt-2"> {/* Ajustamos el margen superior en pantallas pequeñas */}
                <h1 className="text-azulNavy font-bebas-neue text-5xl md:text-7xl">¿ESTÁS LISTO PARA</h1>
                <h2 className="text-rojoFuerte font-bebas-neue text-5xl md:text-7xl">CONSTRUIR TU FUTURO?</h2>
            </div>
        </section>
    );
};

export default HeroHome;
