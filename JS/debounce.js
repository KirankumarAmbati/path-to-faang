// Implementation
function debouncify(fn, delay) {
    let timerId;

    return function(...args) {
        if(timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

// Test sample
function print(name) {
    console.log("Hello, " +name);
}

const debouncedFunction = debouncify(print, 3000);

debouncedFunction('Test');
debouncedFunction('Test');
debouncedFunction('Test');