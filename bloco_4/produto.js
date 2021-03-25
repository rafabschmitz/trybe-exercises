let custo=-45;
let valor=60;
let quantidade=1000;
let lucro;

if (custo<0 || valor<0 || quantidade<0){
    console.log("quantidades negativas");
    console.log(lucro);
}
else{
    lucro = (valor-custo-(custo*0.2))*quantidade;
    console.log(lucro);
}
