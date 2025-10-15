function bubbleSort(arr) {
  let comparacoes = 0, trocas = 0;
  let n = arr.length;
  let trocou;

  for (let i = 0; i < n - 1; i++) {
    trocou = false;
    for (let j = 0; j < n - 1 - i; j++) {
      comparacoes++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocas++;
        trocou = true;
      }
    }
    if (!trocou) break;
  }

  return { sortedArray: arr, comparisons: comparacoes, swaps: trocas, movements: 0 };
}
module.exports = { bubbleSort };