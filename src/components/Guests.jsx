import React, { useState } from "react";
import Modal from "react-modal";
import image_one from "../assets/classic-one.png";
import imager_two from "../assets/classic-two.png";
import imager_three from "../assets/classic-three.png";
import imager_four from "../assets/classic-four.png";
import imager_five from "../assets/classic-five.png";

const imageMappings = {
  classic_one: image_one,
  classic_two: imager_two,
  classic_three: imager_three,
  classic_four: imager_four,
  classic_five: imager_five,
};

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "15px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 10px 15px 10px rgba(0, 0, 0, 0.25)",
  },
};

Modal.setAppElement('#root');

const Guests = ({ invitationStyle }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const imagePath = imageMappings[invitationStyle.replace("-", "_")];

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="pb-8 w-full bg-[#bcc3ac] text-black flex flex-col justify-center items-center">
        <div className="h-1/3 items-center mt-6">

        </div>
        <h2 className="text-md text-center mt-6">
          El mejor regalo es vuestra asistencia por eso acompañanos en este día inolvidable porque eres un invitado especial.
        </h2>
        <h2 className="text-md text-center mt-6">
          Hemos reservado
        </h2>
        <div className="h-1/3 items-center mt-6">
            <img src={ imagePath } alt="image_number" className="w-20 h-20 mb-6 rounded-xl" />
        </div>
        <h2 className="text-md text-center">
         {invitationStyle.includes("one") ? 'lugar' : 'lugares'} exclusivamente para ti.
        </h2>
      </div>
    </>
  );
};

export default Guests;
