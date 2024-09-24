var filter = function(arr, fn) {
    const filteredArr = [];
    for(let i=0; i<arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

/* Example Usage 

Example 1
const arr = [0, 10, 20, 30];
const greaterThan10 = function(n) { return n > 10; };

const filteredArr = filter(arr, greaterThan10);
console.log(filteredArr); // Output: [20, 30]

Example 2
const arr = [1, 2, 3];
const firstIndex = function(n, i) { return i === 0; };

const filteredArr = filter(arr, firstIndex);
console.log(filteredArr); // Output: [1]

Example 3
const arr = [-2, -1, 0, 1, 2];
const plusOne = function(n) { return n + 1; };

const filteredArr = filter(arr, plusOne);
console.log(filteredArr); // Output: [-2, 0, 1, 2]

*/