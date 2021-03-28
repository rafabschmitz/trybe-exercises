//EXERCICIO 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let i of numbers){
//     console.log(i);
// };

//EXERCICIO 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum=0;
// for(let i=0; i < numbers.length; i+=1){
//     sum = numbers[i]+sum;
// };
// console.log(sum);

//EXERCICIOS 3 e 4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum=0;
// for(let i=0; i < numbers.length; i+=1){
//     sum = (numbers[i]+sum);
// };
// let med = sum/numbers.length;

// if(med>20){
//     console.log(med);
// }
// else{
//     console.log("valor menor que 20");
// }

//EXERCICIO 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = 0;

// for(let i=0; i < numbers.length; i+=1){
//     if(numbers[i] > maior){
//         maior = numbers[i];
//     }  
// }
// console.log(maior);

//EXERCICIO 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impares = [];

// for(let i=0; i < numbers.length; i+=1){
//     if(numbers[i] % 2 !== 0){
//         impares.push(numbers[i]);
//     }  
// }
// if(impares.length !== 0){
//     console.log(impares.length);
// }
// else{
//     console.log("nenhum valor ímpar encontrado");
// }

// EXERCICIO 7
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor=100;
// for(let i=0; i < numbers.length; i+=1){
//     if(numbers[i] < menor){
//         menor = numbers[i];
//     }  
// }
// console.log(menor);

// EXERCICIO 8
// let array = [];
// for(let i=1; i <= 25; i+=1){
//     array.push(i);  
// }
// console.log(array);

//EXERCICIO 9
let array = [];
let divisao = [];
for(let i=1; i <= 25; i+=1){
    array.push(i);  
}
for(let a=0; a < array.length; a+=1){
    divisao.push(array[a]/2);
}
console.log(divisao);