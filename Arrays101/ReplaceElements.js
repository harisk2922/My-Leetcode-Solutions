var replaceElements = function(arr) {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = max;
        max = Math.max(max, current);  
    }
    return arr;
};

var arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));