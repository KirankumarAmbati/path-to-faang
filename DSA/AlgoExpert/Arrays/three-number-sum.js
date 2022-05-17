//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. The function should find all triplets in
//   the array that sum up to the target sum and return a two-dimensional array of
//   all these triplets. The numbers in each triplet should be ordered in ascending
//   order, and the triplets themselves should be ordered in ascending order with
//   respect to the numbers they hold.

//   If no three numbers sum up to the target sum, the function should return an empty array.

// ### Inferences:

// * Non-empty arrays of distinct integers
// * Triplets should be in ascending order
// * [] if no match

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b > 0 ? 1 : -1); //nlogn
    let output = []; // SC: O(n)

    // TC: O(n*2)
    for (let i = 0; i < array.length - 1; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            if (array[i] + array[left] + array[right] === targetSum) {
                output.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (array[i] + array[left] + array[right] > targetSum) {
                right--;
            } else if (array[i] + array[left] + array[right] < targetSum) {
                left++;
            }
        }
    }

    return output;
}

const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

threeNumberSum(array, targetSum); // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
