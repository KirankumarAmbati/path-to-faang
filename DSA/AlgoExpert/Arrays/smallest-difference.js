// MEDIUM:

// Write a function that takes in two non-empty arrays of integers, finds the
// pair of numbers (one from each array) whose absolute difference is closest to
// zero, and returns an array containing these two numbers, with the number from
// the first array in the first position.

// Note that the absolute difference of two integers is the distance between
// them on the real number line. For example, the absolute difference of -5 and 5
// is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest
// difference.


// ### Inferences ###

// * Non-empty arrays, can include negatives
// * Absolute difference
// * Closer to Zero.

// ### Approach-1 ###
// BRUTE FORCE

// TC: O(n*2)
// SC: O(1)

// ### Approach - 2
// Two pointers approach

// TC: O(nlogn + mlogm)
// SC: O(1)

function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a > b ? 1 : -1);
	arrayTwo.sort((a, b) => a > b ? 1 : -1);
	
	let p1 = 0, p2 = 0, diff = Number.POSITIVE_INFINITY, num1, num2;
	
	while(p1 <= arrayOne.length -1 && p2 <= arrayTwo.length -1) {
		if(Math.abs(arrayOne[p1] - arrayTwo[p2]) < diff) {
			diff = Math.abs(arrayOne[p1] - arrayTwo[p2]);
			num1 = arrayOne[p1];
			num2 = arrayTwo[p2];
		}

		if(arrayOne[p1] >= arrayTwo[p2]) {
			p2++
		} else {
			p1++
		}
	}
	
	return [num1, num2];
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

smallestDifference(arrayOne, arrayTwo); // [28, 26]