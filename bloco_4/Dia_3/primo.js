let n = 100;
let divisores = 0;
let primo = [];
for (let i = 2 ; i <= n ; i += 1){      // numeradores
    for (let a = 2 ; a <= i ; a += 1){   // varre possíveis divisores
        if(i % a === 0){
            divisores += 1;     // incrementa a cada divisor encontrado
        }
    }
    if(divisores === 1){        
        primo.push(i);          // adiciona apenas os primos
    }
    divisores = 0;
}
console.log(primo);