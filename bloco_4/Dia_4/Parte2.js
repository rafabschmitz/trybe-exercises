function isPalindrome(text){
    let inverso = [];

    for(let i=text.length-1; i>=0; i-=1){ //constroi array inverso   
        inverso.push(text[i]); 
    }
    let textInvertido = inverso.join('');  
    if(text===textInvertido){
        return true;
    }
    else{
        return false;
    }

}
console.log(isPalindrome("roma"));