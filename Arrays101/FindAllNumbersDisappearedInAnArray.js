var findDisappearedNumbers = function(nums) {
    let output = [];
    for(let i=0; i<nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if(nums[index]>0) {
            nums[index] = -nums[index];
        }
    }
    for(let i=0; i<nums.length; i++) {
        if(nums[i]>0) {
        output.push(i + 1)
        }
    }
    return output;
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));