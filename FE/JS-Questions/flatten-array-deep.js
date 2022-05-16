function deepFlattenArray(array, outputResult = []) {

    array.forEach(element => {
        if (Array.isArray(element)) {
            outputResult = deepFlattenArray(element, outputResult);
        } else {
            outputResult = [...outputResult, element];
        }
    });

    return outputResult;
}

deepFlattenArray([1, [2, 3], [4, [5, 6, [7, 8]]]]); // [1,2,3,4,5,6,7,8]