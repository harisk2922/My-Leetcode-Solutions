var map = function(arr, fn) {
    let result = [];
    for (let i=0; i<arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

/* Example Usage 

Example 1
const arr = [1, 2, 3];
const plusOne = function(n) { return n + 1; };

const newArray = map(arr, plusOne);
console.log(newArray); // Output: [2, 3, 4]

Example 2
const arr = [1, 2, 3];
const plusI = function(n, i) { return n + i; };

const newArray = map(arr, plusI);
console.log(newArray); // Output: [1, 3, 5]

Example 3
const arr = [10, 20, 30];
const constant = function() { return 42; };

const newArray = map(arr, constant);
console.log(newArray); // Output: [42, 42, 42]

*/