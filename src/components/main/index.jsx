import React from "react";
import "./main.css";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";

export default function Main() {
  return (

    <section>
      <Header />
      <div className="maintext">
        <div className="text">
          <a>Atualize para acessar a API</a>
        </div>
        <div className="btn">
          <button className="botao"></button>
        </div>
        <div className="generator">
          <div>
            <p className="legenda">Frase</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function legenda() {
  fetch("https://opentdb.com/api.php?amount=30&category=15").then((legenda) =>
    legenda.json().then((dados) => {
      var legenda = document.querySelector(".legenda");
      legenda.innerHTML = `${dados.results}`;
    })
  );
}

legenda();
