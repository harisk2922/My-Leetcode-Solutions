var sortArrayByParity = function(nums) {
    for (let i = 0, j = nums.length - 1; i < j;) {
        if (nums[i] % 2 === 0) {
            i++;
            continue;
        }
        if (nums[j] % 2 !== 0) {
            j--;
            continue;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    return nums;
};

let nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));