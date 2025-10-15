function mergeSort(arr) {
    let comparisons = 0;
    let movements = 0; // Renomeado de swaps para movements

    function merge(left, right) {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            comparisons++;
            if (left[i] <= right[j]) {
                result.push(left[i]);
                movements++;
                i++;
            } else {
                result.push(right[j]);
                movements++;
                j++;
            }
        }

        while (i < left.length) {
            result.push(left[i]);
            movements++;
            i++;
        }

        while (j < right.length) {
            result.push(right[j]);
            movements++;
            j++;
        }

        return result;
    }

    function sort(array) {
        if (array.length <= 1) return array;
        const mid = Math.floor(array.length / 2);
        const left = sort(array.slice(0, mid));
        const right = sort(array.slice(mid));
        return merge(left, right);
    }

    const sortedArray = sort(arr);
    // O Merge Sort não realiza trocas, mas sim movimentações de elementos para um array auxiliar.
    // A variável 'swaps' foi renomeada para 'movements' para refletir isso.
    return { sortedArray, comparisons, swaps: 0, movements };
}

module.exports = { mergeSort };
