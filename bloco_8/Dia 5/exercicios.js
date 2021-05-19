// const numbers = [1, 2, 3];

// const newArray = [4, 5, 6, ...numbers];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
// console.log(numbers); // [ 1, 2, 3 ];

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo));

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou o parâmetro ${args} para a função.`;
// }

// console.log(quantosParams());
//console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113