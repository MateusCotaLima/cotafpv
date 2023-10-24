import React from "react";
import "./Sobre.css";

import videoFesta from "../video/festa.mp4";
import sobre from "../img/FotoSobre.png"
const Sobre = () => {
    return (
        <div class="Areas">
            <div class="cardsSobre">
                <div class="tituloSobre">
                    <span>QUEM É COTAFPV? </span>
                    <h1>Sobre Mim</h1>
                    <p>Olá, meu nome é Mateus Cota, Sou de Rio Piracicaba MG, atualmente estou morando em Itabira MG cursando Engenharia de Computação na Unifei. Comecei a estudar sobre os Drones FPV a alguns anos atrás e finalmente este ano tive a condição de investir neste sonho de fazer belas imagens aéreas.</p>
                    <p>Meu objetivo é entregar vídeos com uma perspectiva totalmente diferenciada e de tirar o fôlego, sendo um material excelente para conquistar o tão requisitado aumento de engajamentos nas redes sociais de quaisquer cliente que entrar em contato comigo.</p>
                    <a href="https://wa.link/knfobm"><div class="cotacaoSobre"><i class="fa-brands fa-whatsapp whats"></i> QUERO FAZER UM ORÇAMENTO!</div></a>
                </div>
                <section class="cardSobre">
                    <img src={sobre} className="foto" alt="Foto Mateus Cota" />
                </section>
            </div>
            <hr size="1" color="#bebebe" />
        </div>
    );
};

export default Sobre;
