let bruto = 2500;
let aInss ;
let base;
let aIrpf;
let deducao;
let liquido;

if (bruto < 1556.94){
    aInss = 0.08*bruto;
}
else if (bruto > 1556.94 && bruto < 2594.92){
    aInss = 0.09*bruto;
}
else if (bruto > 2594.92 && bruto < 5189.82){
    aInss = 0.11*bruto;
}
else if (bruto > 5189.82){
    aInss = 570.88;
}

base = bruto - aInss;

if (base < 1903.98){
    aIrpf = 0;
    deducao = 0;
}
else if (base > 1903.98 && base < 2826.65){
    aIrpf = 0.075*base;
    deducao = 142.80;
}
else if (base > 2826.65 && base < 3751.05){
    aIrpf = 0.15*base;
    deducao = 354.80;
}
else if (base > 3751.05 && base < 4664.68){
    aIrpf = 0.225*base;
    deducao = 636.13;
}
else if (base > 4664.68){
    aIrpf = 0.275*base;
    deducao = 869.36;
}

console.log(aInss);
console.log(base);
console.log(aIrpf);
console.log(deducao);
liquido = base-(aIrpf-deducao);
console.log(liquido);
