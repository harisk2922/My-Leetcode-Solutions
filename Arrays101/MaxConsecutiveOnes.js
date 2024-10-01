var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let consecutive = 0;
    for (let i=0; i<nums.length; i++) {
        if(nums[i] == 1) {
            consecutive++;
            count = Math.max(count, consecutive);
        } else {
            consecutive = 0;
        }
    }
    
    return count;
};

let nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));