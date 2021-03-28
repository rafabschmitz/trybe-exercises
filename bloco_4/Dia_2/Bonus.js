let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Bublle Sort
// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {          //Ordem crescente
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }

let mult=[];

for (let index = 1; index < array.length; index += 1) {               //varre elementos do array a partir de  1
    mult.push(array[index]*array[index-1]);
}
mult.push(array[array.length-1]*2);
console.log(mult);