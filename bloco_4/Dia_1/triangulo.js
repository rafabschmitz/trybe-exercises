let ang1 = 100;
let ang2 = 50;
let ang3 = 30;
let triangulo;

if (ang1<0 || ang2<0 || ang3<0){
    console.log("um dos angulos é negativo");
} else if (ang1 + ang2 + ang3 === 180){
    triangulo = true;
    console.log(triangulo);
} else{
    triangulo = false;
    console.log(triangulo);
}
