let peca = "TOWE";

let pecaNova = peca.toLowerCase();

switch(pecaNova){
    case "horse":
    console.log("Movimento L invertido ou L deitado");
    break;
    
    case "queen":
    console.log("Numero determinado de casas em qualquer direção");
    break;

    case "king":
    console.log("Uma única casa em qualquer direção");
    break;

    case "tower":
    console.log("Numero determinado de casas na horizontal ou vertical");
    break;

    case "bishop":
    console.log("Numero determinado de casas na diagonal");
    break;

    case "pawn":
    console.log("Uma casa na vertical")
    break;

    default:
    console.log("Peça desconhecida")
}