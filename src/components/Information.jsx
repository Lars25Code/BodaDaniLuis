import axios from "axios";
import React from "react";

const URL = "http://localhost:3000/sumar";
const callEndpoint = async () => {
  const res = await axios.post(URL, { numero1: 1, numero2: 2 });
  console.log(res);
};

export const Information = () => {
  return (
    <>
      <div className="h-[calc(100vh-150px)] text-white bg-[#9aaa9a] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium mb-4">DATOS UTILES</h2>
        <h3 className="text-xl font-medium mb-4">Sugerencia de Hoteles</h3>
        <p>Novotel Madrid Center</p>
        <p>The Principal Madrid Hotel</p>
        <p>Hotel Ibis</p>
        <h2 className="text-xl font-medium mt-4 mb-4">Traslados</h2>
        <p className="w-4/5 text-center">
          Habrá un servicio de autobuses disponibles hasta Finca Las Tenadas.
        </p>
        <p>Contáctanos si deseas más información.</p>
        <button
          onClick={callEndpoint}
          className="text-md mt-6 bg-white text-[#9aaa9a] rounded-full py-2 w-36
        hover:bg-[#9aaa9a] hover:text-white hover:border-white border-[1px] border-white
        transition duration-300 ease-in-out transform"
        >
          VER MAS
        </button>
      </div>
      <div className="w-full bg-[#D28D66] h-24 flex items-center justify-center">
        <h1 className="w-4/5 text-xl text-white text-center">
          ¡Gracias por acompañarnos en este momento tan importante!
        </h1>
      </div>
    </>
  );
};
