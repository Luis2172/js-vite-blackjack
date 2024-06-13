import _ from 'underscore'
import { crearDeck , pedirCarta , valorCarta , turnoComputadora, crearCartaHTML } from './usecases'

/**
*2C = Two of Clubs
*2D = Two of Diamonds
*2H = Two of Hearts
*2S = Two of Spades
*/
export let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo'),
      btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas'),
      divCartasComputadora = document.querySelector('#computadora-cartas');

deck = crearDeck( tipos , especiales );

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHTML(carta);
    divCartasJugador.append(imgCarta);
    if(puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }else if(puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }
});

btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck( tipos , especiales );

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasJugador.innerHTML = ''
    divCartasComputadora.innerHTML = ''

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});


