// Função para gerar vetores de diferentes tipos
function generateVector(size, vectorType = 'aleatório') {
    let arr = [];
// Gerar diferentes tipos de vetores com base no parâmetro vectorType
    switch (vectorType) {
        case 'aleatório':// Vetor com elementos aleatórios
            for (let i = 0; i < size; i++) {
                arr.push(Math.floor(Math.random() * (size * 10)));
            }
            break;
        case 'ordenado':// Vetor ordenado em ordem crescente
            for (let i = 0; i < size; i++) {
                arr.push(i);
            }
            break;
        case 'inverso':// Vetor invertido (ordem decrescente)
            for (let i = size - 1; i >= 0; i--) {
                arr.push(i);
            }
            break;
        case 'quase_ordenado':// Vetor quase ordenado
            for (let i = 0; i < size; i++) {
                arr.push(i);
            }
            // Troca uma pequena porcentagem de elementos
            for (let k = 0; k < Math.floor(size / 100); k++) {
                let idx1 = Math.floor(Math.random() * size);
                let idx2 = Math.floor(Math.random() * size);
                [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
            }
            break;
        default:// Lança um erro para tipos inválidos
            throw new Error('Tipo de vetor inválido. Escolha entre \'aleatório\', \'ordenado\', \'inverso\', \'quase_ordenado\'.');
    }
    return arr;
}
// Exportar a função para uso em outros módulos
module.exports = { generateVector };
