import React from "react";
import "./SobreFpv.css";

import videoFesta from "../video/festa.mp4";
import fpv from "../img/cotafpv.png"
const Sobre = () => {
    return (
        <div class="Areas">
            <div class="cardsSobreFpv">
                <section class="cardSobre">
                    <img src={fpv} className="foto" alt="Foto Mateus Cota" />
                </section>
                <div class="tituloSobreFpv">
                    <span>PRECISANDO DE IMAGENS AÉREAS INOVADORAS? </span>
                    <h1>Conheça o FPV </h1>
                    <p>Os Drones FPV (First Person View), permitem um tipo de filmagem diferente dos drones tradicionais, onde é possível captar imagens dinâmicas e de tirar o fôlego.</p>
                    <p>Os drones FPV são especialmente populares na cinematografia e na produção de vídeos de ação, pois podem capturar ângulos e perspectivas únicas, que seriam difíceis ou impossíveis de obter com outros equipamentos de filmagem.</p>
                    <a href="https://wa.link/knfobm"><div class="cotacaoSobreFpv"><i class="fa-brands fa-whatsapp whats"></i> QUERO FAZER UM ORÇAMENTO!</div></a>
                </div>
                
                
            </div>
            <hr size="1" color="#bebebe" />
        </div>
    );
};

export default Sobre;
