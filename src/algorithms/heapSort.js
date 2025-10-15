// Implementação do Heap Sort com contagem de comparações e trocas
function heapSort(arr) {
    let comparisons = 0;
    let swaps = 0;

    // Função auxiliar para manter a propriedade de heap (max-heap)
    function heapify(items, n, i) {
        let largest = i; // Inicializa o maior como raiz
        let left = 2 * i + 1; // filho da esquerda = 2*i + 1
        let right = 2 * i + 2; // filho da direita = 2*i + 2

        // Se o filho da esquerda é maior que a raiz
        if (left < n) {
            comparisons++;
            if (items[left] > items[largest]) {
                largest = left;
            }
        }

        // Se o filho da direita é maior que o maior até agora
        if (right < n) {
            comparisons++;
            if (items[right] > items[largest]) {
                largest = right;
            }
        }

        // Se o maior não é a raiz
        if (largest !== i) {
            [items[i], items[largest]] = [items[largest], items[i]];
            swaps++;
            // Heapify recursivamente a subárvore afetada
            heapify(items, n, largest);
        }
    }

    // Função principal do Heap Sort
    let arrCopy = [...arr];
    let n = arrCopy.length;

    // Constrói um max-heap (reorganiza o array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arrCopy, n, i);
    }

    // Extrai elementos um por um do heap
    for (let i = n - 1; i > 0; i--) {
        // Move a raiz atual para o final
        [arrCopy[0], arrCopy[i]] = [arrCopy[i], arrCopy[0]];
        swaps++;
        // Chama max-heapify no heap reduzido
        heapify(arrCopy, i, 0);
    }
// Retorna o array ordenado junto com as contagens de comparações e trocas
    return { sortedArray: arrCopy, comparisons, swaps, movements: 0 };
}

// exporta o módulo
module.exports = { heapSort };

