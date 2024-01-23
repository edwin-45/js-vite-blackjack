import _ from 'underscore';

import { pedirCarta,crearDeck,crearCarta,acumularPuntos, turnoComputadora } from './usecases';

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  //Referencias html
  const btnPedir = document.querySelector("#btnPedir");
  const btnDetener = document.querySelector("#btnDetener");
  const btnNuevoJuego = document.querySelector("#btnNuevo");
  const puntosHTML = document.querySelectorAll("small");
  const divCartasJugadores = document.querySelectorAll(".divCartas");

  const inicializarJuego = (numJugadores = 2)=>{
    deck = crearDeck(tipos,especiales);
    puntosJugadores = [];
    for(let i=0; i< numJugadores;i++){
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(ele => Element.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    
  }

  deck = crearDeck(tipos,especiales);

  // Eventos

  btnPedir.addEventListener("click", () => {

    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta,0,puntosJugadores,puntosHTML);
    crearCarta(carta, 0,divCartasJugadores);
    
    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHTML,divCartasJugadores);
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,deck,puntosJugadores,puntosHTML,divCartasJugadores);
    }
  });

  btnDetener.addEventListener("click", () => {
    
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosJugadores,puntosHTML,divCartasJugadores);
    
  });

  btnNuevoJuego.addEventListener("click", () => {
    inicializarJuego();

  });

  return {
    nuevoJuego : inicializarJuego
  }
})();
