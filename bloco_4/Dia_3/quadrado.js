// QUADRADO
let n = 4;
let texto = "";
if(n>=1){
    for(l=1; l<=n ; l += 1){
        for(c=1; c<=n ; c += 1){
            texto = texto + "*";
        }
        texto = texto + "\n";
    }
}
console.log(texto);