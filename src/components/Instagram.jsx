import React from "react";

export const Instagram = () => {
  return (
    <div className="w-full h-[calc(100vh-150px)] flex flex-col justify-center items-center">
      <img src="https://agendalafecha.com/es/boda/assets/img/icono-instagram.svg" alt="icon-gift" className="w-40 h-40 mb-2" />
      <h2 className="text-3xl font-medium mb-4">#DaniYLuis2024</h2>
      <p>¡Prepárate para nuestro gran día!</p>
      <p>Usa nuestro hashtag en tus fotos y videos.</p>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/explore/tags/DaniYLuis2024/" >
        <button className="text-md mt-6 bg-[#9aaa9a] text-white rounded-full py-2 w-60 hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
        transition duration-300 ease-in-out transform">
          VER FOTOS INSTAGRAM
        </button>
      </a>
    </div>
  );
};
