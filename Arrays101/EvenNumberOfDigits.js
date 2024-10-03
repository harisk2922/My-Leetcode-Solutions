var findNumbers = function(nums) {
    let howMany = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let num = nums[i];
        while (num > 0) {
            num = Math.floor(num / 10);
            count++;
        }
        if (count % 2 === 0) {
            howMany++;
        }
    }
    return howMany;
};

var nums = [5820,317,640,957,7182,764];
console.log(findNumbers(nums));




