// https://javascript.plainenglish.io/javascript-interview-question-10-common-recursion-problems-d6ac97f65d0d

// https://medium.com/frontend-canteen/10-code-challenges-to-master-promise-then-and-promise-catch-3da2bdea1d97

// https://betterprogramming.pub/10-javascript-closure-challenges-explained-with-diagrams-c964110805e7

// https://algodaily.com/challenges/implement-json-parse

// Challenge 1: Implement flat() function using recursion

Array.prototype.myFlat = function(depth = Infinity) {
    const self = this;

    function flat(arr, depth) {
        return Array.isArray(arr) && depth > 0
            ? [].concat(...arr.map(e => flat(e, depth - 1)))
            : arr;
    }

    return flat(self, depth);
}

console.log([1, 2, 3, 4].myFlat());
console.log([1, 2, 3, [4, [5, [6]]]].myFlat());
console.log([1, 2, [3, [4]]].myFlat(1));

// Challenge 2: Implement getElementByClassName() function using recursion

// -> Look for children => child.classList.includes(givenClass)

// Challenge 3: Implement String.length function using recursion

String.prototype.lengthPolyfill = function() {
    const self = this;

    function getLength(str) {
        if(str === '') return 0;
        return 1 + getLength(str.slice(1));
    }

    return getLength(self);
}

console.log('hello.'.length);
console.log('hello.'.lengthPolyfill());

// Challenge 4: Implement Array.fill() function using recursion

Array.prototype.myFill = function(val) {
    const self = this;

    function fill(arr, val) {
        if(arr.length === 0) return [];

        return ['*', ...fill(arr.slice(1), val)];
    }

    return fill(self, val);
}

console.log(Array(5).myFill('*'));

// 1. check whether a number is even or not

// 2. sum every integer element in an array

// 3. sum all nonnegative integers up to n

// 4. Integer in range (x,y)
