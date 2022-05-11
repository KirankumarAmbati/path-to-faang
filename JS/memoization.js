// Implementation
function memo(fn) {
    const cache = {};

    return function(...args) {
        if(!cache[args.toString()]) {
            cache[args.toString()] = fn.apply(this, args);
        }
        return cache[args.toString()]
    }
}

// Tests
function print(name) {
    for(let i=0; i<1000000000; i++) {

    }
    return 'Hi, ' + name;
}

const memoizedPrint = memo(print);

const t0 = performance.now();
memoizedPrint('Test');
const t1 = performance.now();
console.log(`Time taken: ${t1 - t0} milliseconds.`); // ~769ms

const t3 = performance.now();
memoizedPrint('Test');
const t4 = performance.now();
console.log(`Time taken: ${t4 - t3} milliseconds.`); // ~0.1ms