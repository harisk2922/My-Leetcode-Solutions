var validMountainArray = function(arr) {
    if(arr.length < 3) {
        return false;
    } 
    let peakIndex = arr.indexOf(Math.max(...arr));
    if (peakIndex === 0 || peakIndex === arr.length-1) {
        return false;
    }
    for (let i=0; i<peakIndex; i++) {
        if(arr[i] >= arr[i + 1]) {
            return false;
        }
    } 
    for (let i=peakIndex; i<arr.length-1; i++) {
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }
    return true;
};

var arr = [0,3,2,1];
console.log(validMountainArray(arr));