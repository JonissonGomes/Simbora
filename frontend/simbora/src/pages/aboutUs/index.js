import React, { useState } from "react";
import Header from "../../components/Header";
import nodeImage from "../../assets/node.png";
import sqliteImage from "../../assets/sqlite.png";
import reactImage from "../../assets/react.png";
import jeffImage from "../../assets/jeff.jpeg";
import joniImage from "../../assets/joni.jpeg";
import victorImage from "../../assets/victor.jpeg";
import samuelImage from "../../assets/samuel.jpeg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/githubIcon.svg";
import descerIcon from "../../assets/descer.svg";
import subirIcon from "../../assets/subirIcon.svg";
import "./style.css";

const AboutUs = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Header status={"Nova Ideia"} link={"/create-idea"} />
      <div className="main">
        {page === 1 && (
          <div className="about-us-resume">
            <h1>
              Conheça mais sobre o <span>Simbora</span>
            </h1>
            <p>
              O <span>Simbora</span> é um projeto open source desenvolvido
              durante a disciplina Projeto integrador da Faculdade Senac
              Pernanmbuco.
            </p>
            <p>
              A plataforma <span>Simbora</span>, tem como principal objetivo
              oferecer um sistema de compartilhamento de idéias e garantir uma
              boa interatividade e bem estar entre os nossos usuários, sempre
              buscando aperfeiçoamento e melhorias por meio de feedbacks da
              comunidade.
            </p>
            <section
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <img src={descerIcon} alt="descerIcon" />
            </section>
          </div>
        )}

        {page === 2 && (
          <div className="about-us-tecnologies" id="about-us-tecnologies">
            <article onClick={() => setPage(page - 1)}>
              <img src={subirIcon} alt="descerIcon" />
            </article>
            <h1>Tecnologias utilizadas</h1>
            <section>
              <div>
                <img src={nodeImage} alt="" />
              </div>
              <div>
                <img src={sqliteImage} alt="" />
              </div>
              <div>
                <img src={reactImage} alt="" />
              </div>
            </section>
            <article onClick={() => setPage(page + 1)}>
              <img src={descerIcon} alt="descerIcon" />
            </article>
          </div>
        )}
        {page === 3 && (
          <div className="about-us-team" id="about-us-team">
            <article onClick={() => setPage(page - 1)}>
              <img src={subirIcon} alt="descerIcon" />
            </article>
            <h1>Equipe Simbora</h1>
            <div className="team">
              <section>
                <img src={jeffImage} alt="jeffImage" />
                <div className="conteudo">
                  <h3>Jeferson Ezequiel</h3>
                  <a
                    href="https://www.linkedin.com/in/jeferson-gomes-ab56a718a/"
                    target="_blank"
                  >
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    Jeferson Gomes
                  </a>
                  <a href="https://github.com/JefersonEGomes" target="_blank">
                    <img src={githubIcon} alt="githubIcon" />
                    JefersonEGomes
                  </a>
                </div>
              </section>
              <section>
                <img src={joniImage} alt="jeffImage" />
                <div className="conteudo">
                  <h3>Jonisson Gomes</h3>

                  <a
                    href="https://www.linkedin.com/mwlite/in/jonisson-gomes-pe"
                    target="_blank"
                  >
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    Jonisson Gomes
                  </a>
                  <a href="https://github.com/JonissonGomes" target="_blank">
                    <img src={githubIcon} alt="githubIcon" />
                    JonissonGomes
                  </a>
                </div>
              </section>
              <section>
                <img src={samuelImage} alt="jeffImage" className="resize" />

                <div className="conteudo">
                  <h3>Samuel Santos</h3>
                  <a
                    href="https://www.linkedin.com/in/samuel-santos-036375174"
                    target="_blank"
                  >
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    Samuel Santos
                  </a>
                  <a href="https://github.com/samuelLimaSantos" target="_blank">
                    <img src={githubIcon} alt="githubIcon" />
                    samuelLimaSantos
                  </a>
                </div>
              </section>
              <section>
                <img src={victorImage} alt="jeffImage" />
                <div className="conteudo">
                  <h3>Victor Mendes</h3>
                  <a
                    href=" https://www.linkedin.com/in/victor-mendes-4161071b3"
                    target="_blank"
                  >
                    <img src={linkedinIcon} alt="linkedinIcon" />
                    Victor Mendes
                  </a>
                  <a href="https://github.com/VictorMendes7" target="_blank">
                    <img src={githubIcon} alt="githubIcon" />
                    VictorMendes7
                  </a>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
