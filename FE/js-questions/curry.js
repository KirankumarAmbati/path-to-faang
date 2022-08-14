function curry(fn) {
    return function curriedFunction(...args) {
        if (args.length === 0) {
            return fn.call(this);
        }
        return function (...moreArgs) {
            if (moreArgs.length === 0) {
                return fn.apply(this, args);
            } else {
                return curriedFunction(...args, ...moreArgs);
            }
        };
    };
}

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
const curriedSum = curry(sum);

curriedSum();
curriedSum(1, 2)(3)(4)();
curriedSum(1, 2)(3)(4)(5)();
