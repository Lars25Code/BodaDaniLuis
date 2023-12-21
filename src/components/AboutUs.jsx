import React from "react";
import picture1 from "../assets/picture_1.jpg";

export const AboutUs = () => {
  return (
    <div className="pt-12 md:pt-0 h-[calc(100vh-32px)]xl:pt-0 flex flex-col text-center justify-center bg-white pb-12">
      <h1 className="text-3xl mb-12 font-medium">NOSOTROS...</h1>
      <div className="px-4 md:px-32 grid grid-cols-2 gap-1 xl:grid-cols-4 justify-items-center">
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/1.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/2.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/3.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/4.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/5.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/6.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/7.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
        <img
          src="https://agendalafecha.com/es/boda/assets/img/galeria/8.jpg"
          className="w-44 h-44 mb-1 md:w-48 md:h-48 xl:w-72 xl:h-72 mb-0 rounded-xl object-cover hover:z-10 hover:scale-110 transform transition-all duration-300"
        />
      </div>
    </div>
  );
};
