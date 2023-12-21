import React, { useState } from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import Modal from "react-modal";

export const ConfirmAssist = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [appMessage, setAppMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsSuccess(false);
  };

  const confirmarAsistencia = async () => {
    console.log("Nombre:", nombreCompleto);
    console.log("Teléfono:", numeroTelefono);
    console.log("Asistencia:", asistencia);
    console.log("Mensaje:", mensaje);

    if (nombreCompleto === null || nombreCompleto === "") {
      setAppMessage("Por favor, ingresar el nombre antes de enviar.");
      return;
    } else if (numeroTelefono === null || numeroTelefono === "") {
      setAppMessage("Por favor, ingresar el número de teléfono antes de enviar.");
      return;
    } else if (asistencia === null || asistencia === "") {
      setAppMessage("Por favor, selecciona tu asistencia antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("Nombre", nombreCompleto);
    formData.append("Telefono", numeroTelefono);
    formData.append("Asistencia", asistencia);
    formData.append("Mensaje", mensaje);

    fetch("https://script.google.com/macros/s/AKfycbyCJaZlHpRjaRgN2aHpvKZsatreh3VtMsXPJHF6rp5k9FI1cfyBA_HSpvjosPynv-lU/exec", {
      method: "POST",
      body: formData
    })

    setTimeout(() => {
      setAppMessage("¡Asistencia confirmada con éxito!");
      setIsSuccess(true);

      setTimeout(() => {
        closeModal();
        limpiarCampos();
      }, 1000);
    }, 100);
  };

  const limpiarCampos = async () => {
    setNombreCompleto("");
    setNumeroTelefono("");
    setAsistencia("");
    setMensaje("");
    setAppMessage("");
  }

  return (
    <div className="w-full text-center bg-white h-80 text-black flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">CONFIRMACIÓN DE ASISTENCIA</h1>
      <h2 className="text-xl mb-4">
        Los esperamos en este gran día. ¡Confírmanos tu asistencia!
      </h2>
      <button
        onClick={openModal}
        className="flex items-center gap-2 text-white px-4 py-2 w-50 rounded-md focus:outline-none bg-[#9aaa9a]
            hover:bg-white hover:text-[#9aaa9a] hover:border-[#9aaa9a] border-[1px] border-[#9aaa9a]
            transition duration-300 ease-in-out transform"
      >
        <IoMailUnreadOutline />
        <span>CONFIRMAR ASISTENCIA</span>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "400px",
            borderRadius: "15px",
            boxShadow: "0 10px 15px 10px rgba(0, 0, 0, 0.25)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}>
        <div className="text-center">
          <h2 className="text-2xl mb-4">Confirmar Asistencia</h2>
          <form>
            <label className="block mb-2">
              Nombre Completo:
              <input
                type="text"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2">
              Número de Teléfono:
              <input
                type="tel"
                value={numeroTelefono}
                onChange={(e) => {
                  const inputValue = e.target.value.replace(/\D/g, '');
                  setNumeroTelefono(inputValue);
                }}
                className="border p-2 w-full rounded"
              />
            </label>
            <label className="block mb-2">
              ¿Asistiré?
              <select value={asistencia} onChange={(e) => setAsistencia(e.target.value)} className="border p-2 w-full rounded">
                <option value="" disabled hidden>Confirmar</option>
                <option value="Sí, asistiremos.">Sí, asistiremos.</option>
                <option value="Lo siento, no podremos asistir.">Lo siento, no podremos asistir.</option>
              </select>
            </label>
            <label className="block mb-2">
              Mensaje para los novios:
              <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="border p-2 w-full rounded" />
            </label>
            {appMessage && (
              <div className={`message p-2 mt-4 mb-4 rounded ${isSuccess ? "bg-blue-300" : "bg-red-300"}`}>
                {appMessage}
              </div>
            )}
            <button type="button" onClick={confirmarAsistencia} className="bg-[#9aaa9a] text-white px-4 py-2 rounded-md focus:outline-none" >
              Enviar
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
