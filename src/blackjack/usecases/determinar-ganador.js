

export const deternimarGanador= (puntosMinimos,puntosComputadora)=>{

   // const  [puntosMinimos,puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
          alert("empate");
        } else if (puntosMinimos > 21) {
          alert("Computadora Gana");
        } else if (puntosComputadora > 21) {
          alert("Jugador Gana");
        } else {
          alert("Computadora Gana");
        }
      }, 100);
  }