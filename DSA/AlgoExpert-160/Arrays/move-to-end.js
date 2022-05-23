// You're given an array of integers and an integer. Write a function that moves
// all instances of that integer in the array to the end of the array and returns
// the array.

// The function should perform this in place (i.e., it should mutate the input
// array) and doesn't need to maintain the order of the other integers

// ### Inferences:

// * Array of integers
// * Perform it 'in-place'
// * maintaining order of other integers is not necessary

// TC: O(n)
// SC: O(1)

function moveElementToEnd(array, toMove) {
    let left = 0, right = array.length - 1;

    while (left < right) {
        if (array[left] !== toMove) {
            left++;
            continue;
        }
        if (array[right] === toMove) {
            right--;
            continue;
        }
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }

    return array;
}

const array = [2, 1, 2, 2, 2, 3, 4, 2],
const toMove = 2;