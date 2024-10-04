var duplicateZeros = function(arr) {
    let zerosToDuplicate = 0;
    let length = arr.length - 1;
    for (let i = 0; i <= length - zerosToDuplicate; i++) {
        if (arr[i] === 0) {
            if (i === length - zerosToDuplicate) {
                arr[length] = 0;  
                length--;
                break;
            }
            zerosToDuplicate++;
        }
    }
    for (let i = length - zerosToDuplicate; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + zerosToDuplicate] = 0;
            zerosToDuplicate--;
            arr[i + zerosToDuplicate] = 0;
        } else {
            arr[i + zerosToDuplicate] = arr[i];
        }
    }
    return arr;
};

var arr = [1,0,2,3,0,4,5,0];
console.log(duplicateZeros(arr));