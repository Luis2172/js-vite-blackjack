import _ from 'underscore';
/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

//exporta esta funcion a otro modulo
export const crearDeck = ( tiposDeCarta , tiposEspeciales ) => {
    if(!tiposDeCarta || tiposDeCarta.length === 0){
        throw new Error('tipodDeCarta es obligatorio como un arreglo de String');
    }
    if(!tiposEspeciales || tiposEspeciales.length === 0){
        throw new Error('tiposEspeciales es obligatorio como un arreglo de String');
    }
    let deck = [];
    for( let i = 2; i <= 10; i++){
        for( let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck)
    return deck;
}

// export default crearDeck