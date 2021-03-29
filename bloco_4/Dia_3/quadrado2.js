//TRIÂNGULO INVERTIDO
let n = 10;
let texto = "";
if(n>=1){
    for(l=1; l<=n ; l += 1){
        for(e=1; e<=n-l ; e += 1){ //Controla espaços em cada linha
            texto = texto + " ";
        }
        for(c=1; c<=l ; c += 1){ //Controla asteriscos em cada linha
            texto = texto + "*";
        }
        texto = texto + "\n";
    }
}
console.log(texto);

// TRIÂNGULO CENTRADO
// let n = 9;
// let texto = "";
// if(n >= 1 && n % 2 !== 0){
//     for(l=1; l<=n ; l += 2){
//         for(e=(n-l)/2; e>=0 ; e -= 1){ //Controla espaços antes dos asteriscos
//             texto = texto + " ";
//         }
//         for(c=1; c<=l ; c += 1){ //Controla asteriscos em cada linha
//             texto = texto + "*";
//         }
//         for(e=(n-l)/2; e>=0 ; e -= 1){ //Controla espaços depois dos asteriscos
//             texto = texto + " ";
//         }
//         texto = texto + "\n";
//     }
// }
// console.log(texto);

// //TRIÂNGULO CENTRADO VAZADO
// let n = 9;
// let texto = "";
// if(n >= 1 && n % 2 !== 0){
//     for(l=1; l<=n ; l += 2){
//         for(e=(n-l)/2; e>=0 ; e -= 1){ //Controla espaços em cada linha
//             texto = texto + " ";
//         }
//         for(c=1; c<=l ; c += 1){ //Controla asteriscos em cada linha
//             if(l === n || c === 1 || c === l){    
//                 texto = texto + "*";
//             }
//             else { //Preenche linhas vazadas
//                 texto = texto + " ";
//             }
           
//         }
//         for(e=(n-l)/2; e>=0 ; e -= 1){ //Controla espaços em cada linha
//             texto = texto + " ";
//         }
//         texto = texto + "\n";
//     }
// }
// console.log(texto);