var pivotIndex = function(nums) {
    let sumLeft = 0;
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    for (let i=0; i<nums.length; i++) {
        let sumRight = totalSum-sumLeft-nums[i];
        if(sumRight===sumLeft) {
            return i;
        }
        sumLeft = sumLeft+nums[i];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));