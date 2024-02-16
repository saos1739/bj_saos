// LAS CARTAS ESTAN EN INGLES, C = CLUB,(TREBOL)
// D = DIAMON = DIAMANTES
//S SPADE = ESPADA
//H HEART = CORAZON

let deck = [];

const tipos = ["C", "D", "S", "H"];
const especiales = ["A", "K", "J", "Q"];
// CREA UNA NUEVA BARAJA
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();
// ESTA FUNCION ES PARA PEDIR CARTA

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas";
  }
  const carta = deck.pop();

  console.log(deck);
  console.log(carta); // la carta debe ser del deck
  return carta;
};

//pedirCarta()
const valorCarta = (carta) => {
  // substring regresa un string cortado en base a la posicion incial y el final que podemos elegir
  const valor = carta.substring(0, carta.length - 1);
    return(isNaN(valor))? 
    (valor ==='A') ? 11:10
    : valor * 1;
    }
  //console.log({ valor });
//   let puntos = 0;
//ISNAN evalua si es un NUMERO 

//   if (isNaN(valor)) {

//     puntos = (valor === 'A') ? 11 : 10;

//     console.log("No es un numero");
//   } else {
//    console.log("Es un numero");
//   puntos = valor * 1;
// };

// console.log(puntos);
// }

const valor = valorCarta('ApD')
console.log({valor});