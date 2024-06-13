/**
 * 
 * @param {Array<String>} deck Llega por parametro un Array de String
 * @returns {String} Devuelve el ultimo elemento del Array
 */
export const pedirCarta = (deck) => {
    if(deck.length === 0){
        throw 'No hay cartas en el Deck';// Es una condicion para que cuando llegue a 0 ya no deje continuar
    }
    const carta = deck.pop()
    return carta;
}