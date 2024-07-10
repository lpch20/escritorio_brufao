import React from "react";
import "./cardComponent.css"; // Asegúrate de crear y usar este archivo para tus estilos

const CardComponent = ({ name, image }) => {
  return (
    <section
      className="card"
      style={{ backgroundColor: "#1d88a2" }}
    >
      <div className="flex flex-col items-center">
        <img className="w-16 lg:w-28 xl:w-40" src={image} alt={name} />
        <p className="card__title">{name}</p>
      </div>
      <div className="card__content"></div>
    </section>
  );
};

export default CardComponent;
