// Given an array of integers between 1 and n, inclusive,  where n is the length of the array, write a function
// that returns the first integer that appears more than once (when the array is
// read from left to right)

// In other words, out of all the integers that might occur more than once in the
// input array, your function should return the one whose first duplicate value
// has the minimum index. Return -1 if not found.

// Note that you're allowed to mutate the input array

// ### Inferences:

// * Given range of integers - 1 to n inclusive
// * Return the integer that appears duplicate, -1 if none.
// * Allowed to mutate the array

// ### Approach-1
// Brute force

// TC: O(n*2)
// SC: O(1)

// ### Approach-2
// Extra - space approach

// TC: O(n)
// SC: O(n)

function firstDuplicateValue(array) {
    let visited = {};

    for (let v of array) {
        if (visited[v]) {
            return v;
        }
        visited[v] = true;
    }

    return -1;
}

const array = [2, 1, 5, 2, 3, 3, 4];
firstDuplicateValue(array); // 2

const array = [2, 1, 5, 3, 3, 2, 4];
console.log(firstDuplicateValue(array)); // 3

// ### Approach-3
// Without extra space

// TC: O(n)
// SC: O(1)

function firstDuplicateValue(array) {
    for(const value of array) {
          const absValue = Math.abs(value);
          console.log({ absValue, value, array })
          if(array[absValue - 1] < 0) {
              return absValue;
          }
          array[absValue - 1] *= -1;
      }
      
      return -1;
  }
