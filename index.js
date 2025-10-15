// Importar os algoritmos de ordenação
const { generateVector } = require('./src/vectorGenerator/generator');
const { heapSort } = require('./src/algorithms/heapSort');
const { mergeSort } = require('./src/algorithms/mergeSort');
const { selectionSort } = require('./src/algorithms/selectionSort');
const { quickSort } = require('./src/algorithms/quickSort');
const { bubbleSort } = require('./src/algorithms/bubbleSort');
const { insertionSort } = require('./src/algorithms/insertionSort');
const { measurePerformance } = require('./src/performanceMeter/meter'); 

// Função para formatar números com separadores de milhar
function formatNumber(num) {
    return num.toLocaleString("pt-BR");
}

// A função measurePerformance é importada de './src/performanceMeter/meter'


// Função para executar a análise de desempenho
function runAnalysis(vectorSize, vectorType) {
    console.log(`Análise de Desempenho para Vetor ${vectorType.charAt(0).toUpperCase() + vectorType.slice(1)} de ${formatNumber(vectorSize)} elementos:`);
    console.log("----------------------------------------------------------------------");
    console.log(`| ${'Algoritmo'.padEnd(15)} | ${'Tempo (ms)'.padEnd(12)} | ${'Comparações'.padEnd(15)} | ${'Trocas'.padEnd(15)} |`);
    console.log("----------------------------------------------------------------------");

    // Gerar o vetor original
    const originalVector = generateVector(vectorSize, vectorType);

    // Definir os algoritmos a serem testados
    const algorithms = {
        "Heap Sort": heapSort,
        "Merge Sort": mergeSort,
        "Quick Sort": quickSort,
        "Selection Sort": selectionSort,
        "Bubble Sort": bubbleSort,
        "Insertion Sort": insertionSort
    };

    // Executar cada algoritmo e medir o desempenho
    const results = {};
    for (const name in algorithms) {
        const algorithmFunc = algorithms[name];
        const { executionTimeMs, comparisons, swaps } = measurePerformance(algorithmFunc, [...originalVector]);
        results[name] = { time_ms: executionTimeMs, comparisons, swaps };
    }

    // Exibir os resultados
    for (const name in results) {
        const data = results[name];
        console.log(`| ${name.padEnd(15)} | ${data.time_ms.toFixed(1).padEnd(12)} | ${formatNumber(data.comparisons).padEnd(15)} | ${formatNumber(data.swaps).padEnd(15)} |`);
    }
    console.log("----------------------------------------------------------------------");
}
    // Definir o tamanho do vetor para a análise
const VECTOR_SIZE = 10000;
// Executar a análise para diferentes tipos de vetores
console.log("\n--- Análise com 10.000 elementos ---\n");
runAnalysis(VECTOR_SIZE, "aleatório");
console.log("\n");
runAnalysis(VECTOR_SIZE, "ordenado");
console.log("\n");
runAnalysis(VECTOR_SIZE, "inverso");
console.log("\n");
runAnalysis(VECTOR_SIZE, "quase_ordenado");

