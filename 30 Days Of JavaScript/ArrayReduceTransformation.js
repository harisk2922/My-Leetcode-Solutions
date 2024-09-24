var reduce = function(nums, fn, init) {
    let result = init;
    for(let i=0; i<nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
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