var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

const arr1 = [5, 4, 1, 2, 3];
const fn1 = (x) => x;  // Identity function: just returns the number itself

console.log(sortBy(arr1, fn1));  

const arr2 = [{x: 1}, {x: 0}, {x: -1}];
const fn2 = (d) => d.x;  // Extract the "x" property from each object

console.log(sortBy(arr2, fn2));  