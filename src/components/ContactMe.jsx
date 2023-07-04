import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div class="container">
      <div class="tituloContato">
        <span>MANDE SUA MENSAGEM ABAIXO </span>
        <h1>Contato</h1>
      </div>
      <div class="contato">
        <section class="cardContato">
          <label for="">NOME</label>
          <input type="text" name="nome" />

          <label for="">TELEFONE</label>
          <input type="number" name="telefone" />

          <label for="mensagem">SUA MENSAGEM</label>
          <input class="mensagem" type="text" name="mensagem" />

          <button type="button">ENVIAR MENSAGEM</button>
        </section>
      </div>
      <hr size="1" color="#111111" />
    </div>
  );
};

export default ContactMe;
