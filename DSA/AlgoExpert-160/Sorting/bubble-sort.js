// Bubble sort:

// Best case: O(n) - Array is already sorted and hence no swaps.
// Worst case: O(n*2) - 2 loops

function bubbleSort(array) {
    let swapped = true;

    while(swapped) {
        swapped = false;

        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                swap(array, i, i+1);

                swapped = true;
            }
        }
    }

    return array;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}