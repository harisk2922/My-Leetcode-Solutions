var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; 
    let count = 1;  
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[count] = nums[i];
            count++;
        }
    }
    for (let i = count; i < nums.length; i++) {
        nums[i] = "_";
    }
    return count; 
};


var nums = [1, 1, 2, 2, 2, 3, 4, 4];
var uniqueCount = removeDuplicates(nums);
console.log(uniqueCount); 
console.log(nums);  