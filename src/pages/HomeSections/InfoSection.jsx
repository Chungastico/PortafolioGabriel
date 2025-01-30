import React from 'react';

export default function InfoSection() {
  return (
    <section className="bg-rojoVino text-white h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:h-4/5 gap-8 lg:gap-0">
        {/* Imagen */}
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <div className="ml-10 w-2/3 h-64 sm:h-80 lg:h-full rounded-full bg-white border-4 border-white flex justify-center items-center overflow-hidden">
            <img
              src="/assets/images/GabrielPrueba.png"
              alt="Gabriel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Texto y Botones */}
        <div className="w-full lg:w-3/5 text-center lg:text-right px-4 lg:pr-8">
          <h1 className="font-bebas-neue text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6">
            ¿QUÉ ESPERAS PARA EMPEZAR A CONSTRUIRLO?
          </h1>
          <p className="font-space-grotesk text-base sm:text-lg md:text-xl lg:text-3xl mb-14">
            Transformo ideas en soluciones que generan impacto.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-4 lg:gap-6">
            <button className="font-bebas-neue text-lg md:text-xl px-8 py-4 lg:px-20 lg:py-3 bg-white text-rojoVino rounded-lg shadow-md hover:bg-gray-200">
              CONTÁCTAME
            </button>
            <button className="font-bebas-neue text-lg md:text-xl px-8 py-4 lg:px-20 lg:py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-rojoVino">
              CONÓCEME MÁS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
