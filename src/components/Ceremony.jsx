import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import image_april from "../assets/icon-april.png";
import image_map from "../assets/image-maps.png";

export const Ceremony = ({ invitationStyle }) => {
  return (
    <>
      <div className="pb-12 pt-24 bg-white flex flex-row gap-12 flex-wrap justify-evenly min-h-[calc(6vh-6px)] w-full">
        <div className="flex flex-col w-96 text-center items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1683/1683840.png" alt="icon-ceremony" className="w-20 h-20 mb-6" />
          <h2 className="text-2xl font-medium mb-4">CEREMONIA</h2>
          <h3>04:00 P.M.</h3>
          <h3>Capilla, Finca Villa Lolita</h3>
        </div>
        <div className="flex flex-col w-96 text-center items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/1274/1274415.png" alt="icon-ceremony" className="w-20 h-20 mb-6" />
          <h2 className="text-2xl font-medium mb-4">RECEPCIÓN</h2>
          <h3>06:00 P.M.</h3>
          <h3>Finca Villa Lolita</h3>
        </div>
        <div className="flex flex-col w-96 text-center items-center">
          <h2 className="text-2xl font-medium mb-4">FECHA ESPECIAL</h2>
          <img src={image_april} alt="icon-april" className="mb-6 rounded-xl" />
        </div>
        <div className="flex flex-col w-96 text-center items-center">
          <h2 className="text-2xl font-medium mb-4">UBICACIÓN</h2>
          <img src={image_map} alt="icon-april" className="mb-6 rounded-xl" style={{ cursor: "pointer" }}
            onClick={() => window.open("https://maps.app.goo.gl/ikwC9LoWGyu69sDb6", "_blank")} />
          <button onClick={() => { window.open("https://maps.app.goo.gl/ikwC9LoWGyu69sDb6", "_blank"); }}
            className="flex items-center gap-2 text-white px-4 py-2 w-50 rounded-md focus:outline-none bg-[#9aaa9a]
            hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
            transition duration-300 ease-in-out transform" >
            <IoLocationSharp />
            <span>Ver Ubicación</span>
          </button>
        </div>
      </div>
    </>
  );
};