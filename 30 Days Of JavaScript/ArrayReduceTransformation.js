var reduce = function(nums, fn, init) {
    let result = init;
    for(let i=0; i<nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};

/* Example Usage 

Example 1
const nums = [1, 2, 3, 4];
const sum = function(accum, curr) { return accum + curr; };
const init = 0;

const finalResult = reduce(nums, sum, init);
console.log(finalResult); // Output: 10

Example 2
const nums = [1, 2, 3, 4];
const sumOfSquares = function(accum, curr) { return accum + curr * curr; };
const init = 100;

const finalResult = reduce(nums, sumOfSquares, init);
console.log(finalResult); // Output: 130

Example 3
const nums = [];
const sum = function(accum, curr) { return 0; };
const init = 25;

const finalResult = reduce(nums, sum, init);
console.log(finalResult); // Output: 25

*/