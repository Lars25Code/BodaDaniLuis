import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import myIcon from "../assets/icon-init.png"; 

export const Welcome = ({
  invitationStyle,
  name1,
  name2,
}) => {
  const bgPremium = `bg-cover bg-center fixed inset-0 z-[-1] bg-premium`;
  const bgClassic = `bg-cover bg-center fixed inset-0 z-[-1] bg-classic`;
  const homeTextClassClassic = `font-handwritting2 flex flex-col items-center justify-center min-h-screen gap-3 p-2 text-black`;
  const homeTextClassPremium = `font-handwritting flex flex-col items-center justify-center min-h-screen p-2 text-white`;

  return (
    <>
      <div
        className={`${invitationStyle.includes("classic") ? bgClassic : bgPremium}`}
      ></div>
      <div className="relative z-[1]">
        <div className="bg-cover bg-center min-h-screen">
          <div className={`${invitationStyle.includes("classic") ? homeTextClassClassic : homeTextClassPremium}`}>
            {invitationStyle === "premium" && <p >¡Nos Casamos!</p>}
            <div className="relative mt-60">
              <h1 className="text-5xl z-10">{name1} & {name2}</h1>
              <img src={myIcon} alt="My Icon" className="icon-img absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-13rem] w-48 h-auto" />
            </div>
            <h2 className={`text-1xl text-center`}>06 • 04 • 2024</h2>
            <h2 className={`text-3xl text-center`}>Nuestra Boda</h2>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mb-4">
          <IoIosArrowDown className={`arrow-icon`} />
        </div>
      </div>
    </>
  );
};
