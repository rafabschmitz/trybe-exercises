// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((item, index, array) => {
//   console.log('Cada elemento do array:', item);
//   console.log('Index, posição do elemento:', index);
//   console.log('Array percorrido:', array);
// });
// arrayOfValues;

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };
// numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camilla', 'Fernando', 'Ana Roberta'];
const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names);