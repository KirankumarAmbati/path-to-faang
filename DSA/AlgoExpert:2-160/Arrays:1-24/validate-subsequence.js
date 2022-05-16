// Given two non - empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
// For instance, the numbers[1, 3, 4] form a subsequence of the array[1, 2, 3, 4], and so do the numbers[2, 4].
// Note that a single number in an array and the array itself are both valid subsequences of the array.

// ### Inferences:

// * Non-empty arrays
// * Doesnt have to be adjacent but have to be in the same ondragover
// * Single number is valid
// * Array itself is valid

// TC: O(n)
// SC: O(1)

function isValidSubsequence(array, sequence) {
    let seqIndex = 0;

    for (let val of array) {
        if (val === sequence[seqIndex]) {
            seqIndex++;
        }
    }

    return seqIndex === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

isValidSubsequence(array, sequence);