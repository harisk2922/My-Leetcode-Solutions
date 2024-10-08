var thirdMax = function(nums) {
    let newnums = Array.from(new Set(nums));
    newnums.sort((a,b) => b-a);
    if(newnums.length<3) {
        return newnums[0];
    } else {
        return newnums[2];
    }
};

var nums = [3, 2, 1];
console.log(thirdMax(nums));  

nums = [1, 2];
console.log(thirdMax(nums)); 

nums = [2, 2, 3, 1];
console.log(thirdMax(nums));

