function flattenArrayWithDepth(array, depth) {
    
}

flattenArrayWithDepth([1, [2, 3], [4, [5, 6]]], 1); // [1,2,3,4,[5,6]]
flattenArrayWithDepth([1, [2, 3], [4, [5, 6]]], 2); // [1,2,3,4,5,6]