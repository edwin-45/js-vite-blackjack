import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";
import { acumularPuntos } from "./acumular-puntos";
import { deternimarGanador } from "./determinar-ganador";


export const turnoComputadora = (puntosMinimos, deck,puntosJugadores,puntosHTML,divCartasJugadores) => {
    
    if(!puntosMinimos)throw new Error("puntos minimos son necesarios");
    if(!deck)throw new Error("puntos minimos son necesarios");

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1,puntosJugadores,puntosHTML);
      crearCarta(carta, puntosJugadores.length-1,divCartasJugadores)
     
    } while (puntosMinimos > puntosComputadora && puntosMinimos <= 21);

    deternimarGanador(puntosMinimos,puntosComputadora);
    
  };