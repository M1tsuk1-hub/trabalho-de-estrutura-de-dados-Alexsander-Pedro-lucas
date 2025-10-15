// Implementação do QuickSort com contagem de comparações e trocas
function quickSort(arr) {
    let comparisons = 0;
    let swaps = 0;
// Função auxiliar para particionar o array
    function _partition(items, low, high) {
        let pivot = items[high];
        let i = low - 1;
// Percorre o array e rearranja os elementos
        for (let j = low; j < high; j++) {
            comparisons++;
            if (items[j] < pivot) {
                i++;
                [items[i], items[j]] = [items[j], items[i]];
                swaps++;
            }
        }// Coloca o pivô na posição correta
        [items[i + 1], items[high]] = [items[high], items[i + 1]];
        swaps++;
        return i + 1;
    }
// Função recursiva do QuickSort
    function _quickSortRecursive(items, low, high) {
        if (low < high) {
            const pivotIndex = Math.floor(Math.random() * (high - low + 1)) + low;
            [items[pivotIndex], items[high]] = [items[high], items[pivotIndex]];
            swaps++;
            // Particiona o array
            let pi = _partition(items, low, high);
            _quickSortRecursive(items, low, pi - 1);
            _quickSortRecursive(items, pi + 1, high);
        }
    }
// Cria uma cópia do array para não modificar o original
    let arrCopy = [...arr];
    _quickSortRecursive(arrCopy, 0, arrCopy.length - 1);
    return { sortedArray: arrCopy, comparisons, swaps, movements: 0 };
}
// exporta o módulo
module.exports = { quickSort };
