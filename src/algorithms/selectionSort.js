// Implementação do Selection Sort com contagem de comparações e trocas
function selectionSort(arr) {
    let n = arr.length;
    let comparisons = 0;
    let swaps = 0;
// Percorre todo o array
    for (let i = 0; i < n; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++;
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        if (min_idx !== i) {
            [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
            swaps++;
        }
    }
    return { sortedArray: arr, comparisons, swaps, movements: 0 };
}
// expota o módulo 
module.exports = { selectionSort };