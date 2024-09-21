var runningSum = function(nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};

let nums = [1, 2, 3, 4, 5];

console.log(runningSum(nums));