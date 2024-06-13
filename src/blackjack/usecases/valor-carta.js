/**
 * obtener el valor de la carta
 * @param {String} carta Llega por parametro un String 
 * @returns {Number} Devuelve el valor del parametro como valor numerico
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length -1)
    return ( isNaN( valor ) ) ?
           ( valor === 'A' ) ? 11 : 10
           : valor * 1;
}