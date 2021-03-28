// let nota = 40;

// if (nota >= 80){
//     console.log("Parabéns, você foi aprovado");
// }
// else if (nota < 80 && nota >= 60){
//     console.log("Você está na lista de espera");
// }
// else {
//     console.log("Você foi reprovado")
// }

let situacao = "lista";

switch(situacao) {
    case "aprovado":
    console.log("Parabéns, você foi aprovado");
    break;

    case "reprovado":
    console.log("Você foi reprovado");
    break;
    
    case "lista":
    console.log("Você está na lista de espera");
    break;

    default:
    console.log("Não se aplica")
}