// Importar o módulo de alta resolução de tempo do Node.js
function measurePerformance(algorithmFunc, arr) {
    const start = process.hrtime.bigint();
    const { comparisons, swaps, movements } = algorithmFunc([...arr]);
    const end = process.hrtime.bigint();
    const executionTimeMs = Number(end - start) / 1_000_000;
    return { executionTimeMs, comparisons, swaps, movements };
}
// Exportar a função para uso em outros módulos
module.exports = { measurePerformance };