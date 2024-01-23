import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCartas ejemplo ["C", "D", "H", "S"]
 * @param {Array<string>} tiposEspeciales ejemplo ["A", "J", "Q", "K"]
 * @returns {Array<string>}
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas) throw new Error('Tipos de cartas es obligatorio');
    if(tiposDeCartas.length === 0) throw new Error('Tipos de cartas debe ser un array de string');

    let deck=[];

    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposDeCartas) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tiposDeCartas) {
      for (let especial of tiposEspeciales) {
        deck.push(especial + tipo);
      }
    }

    return _.shuffle(deck);
  };