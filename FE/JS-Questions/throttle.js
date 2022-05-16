// Imagine yourself as a 7-year-old toddler who loves to eat chocolate cake! Today your mom has made one, but it's not for you, it's for the guests!
// You, being spunky, keep on asking her for the cake. Finally, she gives you the cake. But, you keep on asking her for more.
// Annoyed, she agrees to give you more cake with a condition that you can have the cake only after an hour.
// Still, you keep on asking her for the cake, but now she ignores you. Finally, after an interval of one hour, you get more cake.
// If you ask for more, you will get it only after an hour, no matter how many times you ask her.
// This is what throttling is!

function throttle(fn, delay) {
    let timerId;
    let lastInvokeTime;

    const throttledFunction =  function(...args) {
        let currentTime = Date.now();
        let timeSinceLastInvoke = currentTime - lastInvokeTime;
        let delayRemaining = delay - timeSinceLastInvoke;

        if(delayRemaining <= 0) {
            lastInvokeTime = currentTime;
            fn.apply(this, args);
        } else {
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                lastInvokeTime = Date.now();
                fn.apply(this, args)
            }, delayRemaining)
        }
    }

    throttledFunction.cancel = function (params) {
        clearTimeout(timerId);
    }
    
    return throttledFunction;
}
