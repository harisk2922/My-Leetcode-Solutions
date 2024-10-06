var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }
    for (let i = count; i < nums.length; i++) {
        nums[i] = "_"; 
    }
    return count;
};

var nums1 = [3, 2, 2, 3];
var val1 = 3;
console.log(removeElement(nums1, val1));
console.log(nums1);  

var nums2 = [0, 1, 2, 3, 4, 2];
var val2 = 2;
console.log(removeElement(nums2, val2));
console.log(nums2);