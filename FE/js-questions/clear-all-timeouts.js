const timeouts = [];

const clearAllTimeouts = function() {
    timeouts.forEach(timerId => {
        clearTimeout(timerId)
    })
}

const setTimeout = function(fn, delay) {
    const timerId = globalThis.setTimeout(fn, delay);
    timeouts.push(timerId);
}

function func1() {
    console.log('func1');
}

function func2() {
    console.log('func2');
}

function func3() {
    console.log('func3');
}

setTimeout(func1, 3000)
setTimeout(func2, 3000)
setTimeout(func3, 3000)

clearAllTimeouts();
