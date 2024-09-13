const teclado = require('prompt-sync')({sigint:true});
let num = parseFloat(teclado("digite sua idade... "));

if (num >=18)
    {

        console.log("você é maior de idade");
    }
else {
console.log("você é menor de idade");}
