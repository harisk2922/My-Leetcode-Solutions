var compose = function(functions) {
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

/* Example Usage 

Example 1
const functions = [x => x + 1, x => x * x, x => 2 * x];
const composedFn = compose(functions);
console.log(composedFn(4)); // Output: 65

Example 2
const functions = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFn = compose(functions);
console.log(composedFn(1)); // Output: 1000

Example 3
const functions = [];
const composedFn = compose(functions);
console.log(composedFn(42)); // Output: 42

*/