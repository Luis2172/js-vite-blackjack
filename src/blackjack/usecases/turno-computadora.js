import { pedirCarta , valorCarta , crearCartaHTML} from './'
import {  } from './valor-carta'
/**
 * 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos HTML para mostrar los puntos
 * @param {divCartasComputadora} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos , puntosHTML , divCartasComputadora, deck ) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesario');
    if(!deck) throw new Error('El deck es necesario');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do{
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(()=>{
        if(puntosComputadora === puntosMinimos){
            alert('Empataron')
        }else if((puntosMinimos > 21) || ((puntosComputadora > puntosMinimos) && (puntosComputadora <= 21))){
            alert('Felicidades, !Ganaste Computadora!')
        }else{
            alert('Felicidades, !Ganaste Humano!')
        }
    },10);

    
}