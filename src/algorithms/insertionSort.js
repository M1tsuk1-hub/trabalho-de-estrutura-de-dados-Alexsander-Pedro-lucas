function insertionSort(arr) {
  let comparacoes = 0, trocas = 0;
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    // Move elements of arr[0..i-1], that are greater than key, to one position ahead
    while (j >= 0) {
      comparacoes++;
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
        trocas++; // contamos deslocamentos como trocas/movimentos
        j = j - 1;
      } else {
        break;
      }
    }
    arr[j + 1] = key;
  }
  return { sortedArray: arr, comparisons: comparacoes, swaps: trocas, movements: 0 };
}
module.exports = { insertionSort };