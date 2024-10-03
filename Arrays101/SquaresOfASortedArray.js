var sortedSquares = function(nums) {
    for (let i=0; i<nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a, b) => a - b); 
    return nums;
};

var nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));