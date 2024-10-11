var dominantIndex = function(nums) {
    let largestElement = nums[0];
    let largestIndex = 0
    for(let i=1; i<nums.length; i++) {
        if(nums[i]>largestElement) {
            largestElement = nums[i];
            largestIndex = i;
        }
    }
    for(let i=0; i<nums.length; i++) {
        if(i !== largestIndex && largestElement < 2 * nums[i]) {
            return -1;
        } 
    }
    return largestIndex;
};

var nums = [3,6,1,0];
console.log(dominantIndex(nums));