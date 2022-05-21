//   Write a function that takes in a non-empty array of integers that are sorted
//   in ascending order and returns a new array of the same length with the squares
//   of the original integers also sorted in ascending order.

// ## Inferences:

// * Sorted, Non-empty array of Integers
// * Non-negatives will be present

function sortedSquaredArray(array) {
    return array
        .map(el => el * el)
        .sort((a, b) => a-b > 0 ? 1 : -1);
}

const array = [-4, -1, 0, 5, 10];
sortedSquaredArray(array);