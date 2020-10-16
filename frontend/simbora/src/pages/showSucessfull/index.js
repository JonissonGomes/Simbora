import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import sucessImage from "../../assets/sucessImage.svg";
import "./style.css";

const Sucessfull = () => {
  return (
    <div className="pai">
      <Header status={"Nova Ideia"} link={"/create-idea"} />
      <section className="sucess">
        <img src={sucessImage} alt="" />
        <h1>Ideia cadastrada com sucesso!</h1>
        <div className="botao">
          <Button text="Ver ideias" link="/show-ideas" />
        </div>
      </section>
    </div>
  );
};

export default Sucessfull;
