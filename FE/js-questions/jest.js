function expect(actualvalue) {
    return {
        toBe(expectedValue) {
            return Object.is(actualvalue, expectedValue);
        },
        not: {
            toBe(expectedValue) {
                return !Object.is(actualvalue, expectedValue);
            }
        }
    }
}

console.log(expect(3).toBe(3)); // ✅
console.log(expect(4).toBe(3)); // ❌

console.log(expect(3).not.toBe(3)); // ❌
console.log(expect(4).not.toBe(3)); // ✅
