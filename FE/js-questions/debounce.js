// Consider the same cake example. This time you kept on asking your mom for the cake so many times
// that she got annoyed and told you that she will give you the cake only if you remain silent for one hour.
// This means you won’t get the cake if you keep on asking her continuously - you will only get it one hour after last time you ask,
// once you stop asking for the cake. This is debouncing!

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