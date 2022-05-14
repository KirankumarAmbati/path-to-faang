// Implementation
function debouncify(fn, delay) {
    let timerId;

    return function(...args) {
        if(timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

// Test sample
function print(name) {
    console.log("Hello, " +name);
}

const debouncedPrint = debouncify(print, 3000);

debouncedPrint('Test');
debouncedPrint('Test');
debouncedPrint('Test');