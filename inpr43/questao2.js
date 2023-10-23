let somatorioPares = 0

for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
        somatorioPares += i;
    }
}
console.log(`O somatório dos valores pares de 1 a 500 é ${somatorioPares}`)
