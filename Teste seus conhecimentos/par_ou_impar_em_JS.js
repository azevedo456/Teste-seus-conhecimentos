const teclado = require('prompt-sync')({sigint:true});
let num1 = parseFloat(teclado("digite um número "));

if (num1 % 2===0)
    {

        console.log("o número digitado é par");
    }
else {
console.log("o número digitado é ímpar");}
