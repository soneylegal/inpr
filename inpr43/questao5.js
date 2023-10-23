const prompt = require('prompt-sync')();
function calcularFatorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

let totalFatorial = 0

for (let i = 1; i <= 15; i++) {
    const valor = parseInt(prompt(`Digite o ${i}º valor inteiro: `));
    totalFatorial += calcularFatorial(valor);
}
console.log(`A soma dos fatoriais é: ${totalFatorial}`)
