import React from "react";
import Countdown from "react-countdown";
import { CiHeart } from "react-icons/ci";


const DaySection = ({ invitationStyle }) => {
  const classicStyle =
    "w-full bg-[#F1C0A1] h-62 flex flex-col items-center text-center gap-4 p-2";
  const premiumStyle =
    "w-full bg-[#011627] h-62 flex flex-col items-center justify-center gap-4 p-2";

  return (
    <>
      {invitationStyle.includes("classic") ? (
      <div className={`${classicStyle}`}>
        <h2 className="text-2xl">¡Contando los días para nuestro gran día!</h2>
        <Countdown
          date={new Date('2024-04-06T00:00:00')}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return (
                <>
                  <h2 className="text-4xl text-white text-bold">¡ES HOY!</h2>
                  <h1 className="text-3xl text-white">¡Llegó el gran día!</h1>
                </>
              );
            } else {
              return (
                <div className="countdown-container">
                  <div className="countdown-item">
                    <div className="countdown-circle pulsate">
                      <span className="countdown-number">{days}</span>
                    </div>
                    {days === 1 ? (
                      <h2 className="countdown-label">Día</h2>
                    ) : (
                      <h2 className="countdown-label">Días</h2>
                    )}
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-circle pulsate">
                      <span className="countdown-number">{hours}</span>
                    </div>
                    {hours === 1 ? (
                      <h2 className="countdown-label">Hora</h2>
                    ) : (
                      <h2 className="countdown-label">Horas</h2>
                    )}
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-circle pulsate">
                      <span className="countdown-number">{minutes}</span>
                    </div>
                    {minutes === 1 ? (
                      <h2 className="countdown-label">Minuto</h2>
                    ) : (
                      <h2 className="countdown-label">Minutos</h2>
                    )}
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-circle pulsate">
                      <span className="countdown-number">{seconds}</span>
                    </div>
                    {seconds === 1 ? (
                      <h2 className="countdown-label">Segundo</h2>
                    ) : (
                      <h2 className="countdown-label">Segundos</h2>
                    )}
                  </div>
                </div>
              );
            }
          }}
        />
      </div>
    ) : (
        <div className={`${premiumStyle} text-center`}>
          <CiHeart
          className={`heart-icon`}
          />
          <h1 className="text-3xl text-white font-handwritting2">
            Queremos celebrar junto a vos este momento tan especial para
            nosotros...
          </h1>
        </div>
      )}
    </>
  );
};

export default DaySection;
