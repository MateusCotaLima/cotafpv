import React from 'react';
import './Areas.css';

 import video from '../video/videoMat.mp4'
 import videoFesta from '../video/festa.mp4'
 import videoHotel from '../video/hotel.mp4'
 import videoInterep from '../video/interep.mp4'
 import videoParque from '../video/parque.mp4'
 import videoImovel from '../video/videoHotel.mp4'
const Areas = () => {
    return (
        <div class="Areas">
            <div class="titulo">
                <span>VEJA ALGUNS SEGMENTOS QUE PODEM USAR O FPV </span>
                <h1>O Mercado dos Drones FPV</h1>
            </div>
            <div class="cardsAreas">
                    <section class="card">
                        <video class="videos" src={videoFesta} autoPlay muted loop></video>
                        <span class="autor">YURIMOREIRA_ </span>
                        <h2>EVENTOS E FESTAS</h2>                    
                    </section>
                    <section class="card">
                        <video class="videos" src={videoInterep} autoPlay muted loop></video>
                        <span class="autor">COTAFPV </span>
                        <h2>EVENTOS ESPORTIVOS</h2>
                    </section>
                    <section class="card">
                        <video class="videos" src={videoHotel} autoPlay muted loop></video>
                        <span class="autor">PROHDIGYY </span>
                        <h2>HOTÉIS</h2>
                    </section>
                    <section class="card">
                        <video class="videos" src={videoImovel} autoPlay muted loop></video>
                        <span class="autor">GRAVA FILMS </span>
                        <h2>SETOR IMOBILIÁRIO</h2>
                    </section>
                    <section class="card">
                        <video class="videos" src={videoParque} autoPlay muted loop></video>
                        <span class="autor">MAHENDRAFPV </span>
                        <h2>PARQUES</h2>
                    </section>
                    <section class="card">
                        <video class="videos" src={video} autoPlay muted loop></video>
                        <span class="autor">COTAFPV </span>
                        <h2>E MUITO MAIS</h2>
                    </section>
            </div> 
            <a class="containerBotao" href="https://wa.link/knfobm"><div class="cotacaoAreas"><i class="fa-brands fa-whatsapp whats"></i> QUERO FAZER UM ORÇAMENTO!</div></a>
            <hr size="1" color="#1A1A1A"/>
        </div>
    );
}

export default Areas;
