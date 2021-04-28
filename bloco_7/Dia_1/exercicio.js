// const teste = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
//     console.log(ifScope);
//   } else {
//     const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// teste(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescente = (array) =>  array.sort( function (a, b) {
  return a - b;
});

console.log(crescente(oddsAndEvens));

