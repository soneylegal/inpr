let numeroDeQuadros = 64
let graosNoQuadroAtual = 1
let somatorioGraos = 0

for (let i = 1; i <= numeroDeQuadros; i++) {
  somatorioGraos += graosNoQuadroAtual;
  graosNoQuadroAtual *= 2
}

console.log(`O número total de grãos é: ${somatorioGraos}`)
