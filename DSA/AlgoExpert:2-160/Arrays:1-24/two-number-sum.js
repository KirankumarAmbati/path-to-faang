// ### Question:

// Write a function that takes in a `non-empty` array of `distinct` integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.

// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

// Input: 

// - array:  [3, 5, -4, 8, 11, 1, -1, 6]
// - target: 10

// Output:
// - [-1, 11]



// ### Inferences:

// - Non-empty Array
// - Distinct integers
// - Target found: return array of those numbers
// - Target not found: []
// - Atmost one matching pair only
// - Can not add single integer twice


// ##### Brute force #####

// Why? 
// - Naive approach

// - Run two loops and then get those numbers
// - Time complexity: O(n*2)
// - Space complexity: O(1)

// Implementation:

function twoNumberSumBruteForceApproach(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i] + array[j] === target) {
                return [array[i], array[j]];
            }
        }
    }

    return [];
}


// ##### Having complementary object storing the complementaries:

// Why?
// - We know what we are looking for.

// - Need an extra space, an object, of O(n) to store the complements. Why object?-- access time is O(1)
// - Iterate of the array and then for each element, look if it's complement (target - num) is present in the object
// TC: O(n)
// SC: O(n)

// Implementation:

function twoNumberSumWithExtraSpace(array, target) {
    const complementsMap = {};

    for (let i = 0; i < array.length; i++) {
        if(complementsMap[target - array[i]]) {
            return [array[i], target - array[i]];
        } 
        complementsMap[array[i]] = true
    }

    return [];
}


// ##### Two-pointer approach #####

// Why?
// - If we can sort the array, then we can deploy 2-pointer technique since we know that traversing left-> right increases the value and vice-versa

// TC: O(nlogn) - For sorting
// SC: O(1) - no extra space other than 2 pointers

function twoNumberSumTwoPointerApproach(array, target) {
    array.sort((a, b) => a-b > 0 ? 1 : -1); // Sorts in ascending order.

    let left = 0;
    let right = array.length - 1;
    
    while(left < right) {
        if(array[left] + array[right] === target) {
            return [array[left], array[right]]
        } else if(array[left] + array[right] < target) {
            left++
        } else if(array[left] + array[right] > target) {
            right++
        }
    }

    return [];
}