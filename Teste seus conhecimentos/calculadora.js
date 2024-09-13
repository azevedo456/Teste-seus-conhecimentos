const readline = require('readline');

// Configura o readline para entrada e saída do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular a soma dos números de 1 até n
function calcularSoma(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

// Função principal para solicitar e processar a entrada do usuário
function solicitarNumero() {
    rl.question('Digite um número inteiro positivo: ', (input) => {
        let n = parseInt(input);

        // Verifica se a entrada é um número válido e positivo
        if (isNaN(n) || n < 1) {
            console.log("Entrada inválida. Por favor, digite um número inteiro positivo.");
            solicitarNumero(); // Solicita a entrada novamente
        } else {
            // Calcula a soma e exibe o resultado
            let soma = calcularSoma(n);
            console.log(`A soma de todos os números de 1 até ${n} é ${soma}.`);
            rl.close(); // Fecha a interface readline
        }
    });
}a

// Executa a função principal
solicitarNumero();
