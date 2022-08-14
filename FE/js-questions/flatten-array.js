// function flatten(a, depth = 1) {
//     depth--;
//     return Array.isArray(a) && depth >= 0 ? [].concat(...a.map((v) => flatten(v, depth))) : a;
// }

function flatten(a, depth = Infinity) {
    return Array.isArray(a) && depth > 0
        ? [].concat(...a.map(el => flatten(el, depth - 1)))
        : a;
}

console.log(flatten([1, 2, 3, [[4]]]));
