function multiply(a, b, c) {
    return a * b * c;
}

function currify(fn) {
    return function curriedFn(...args) {
        if(args.length >= fn.length) {
            return fn.apply(null, args)
        } else {
            return curriedFn.bind(null, ...args);
        }
    }
}
console.log(multiply(1, 2, 4));


const curriedMultiply = currify(multiply);
console.log(curriedMultiply(1)(2, 4));

function multiplyTillEmpty(a) {
    return function(b) {
        if(b) {
            return multiplyTillEmpty(a * b);
        }

        return a;
    }
}

console.log(multiplyTillEmpty(1)(2)(4)());

