const prompt = require('prompt-sync')({ sigint: true });
function IMC() {
    let peso = parseFloat(prompt("Digite seu peso: "));
    let altura = parseFloat(prompt("Digite sua altura: "));
    
    // Validação básica
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        console.log("Entrada inválida. Verifique se os valores são números e se a altura é maior que zero.");
        return;
    }
    
    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    
    if (imc < 18.5) {
        console.log("Você está abaixo do peso...");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Você está no peso ideal.");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Você está um pouco acima do peso...");
    } else if (imc >= 30 && imc <= 34.9) {
        console.log("Você está na obesidade grau 1.");
    } else if (imc >= 35 && imc <= 39.9) {
        console.log("Você está na obesidade grau 2.");
    } else {
        console.log("Você está na obesidade grau 3.");
    }
}

// Chame a função para calcular o IMC
IMC();
