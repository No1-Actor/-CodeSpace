nums = [1,1,1,2,2,3]
var removeDuplicates = function(nums) {
    let i = 1
    for (let j = 2; j < nums.length; j++) {
        if(nums[j] !== nums[i]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1;
};
console.log(removeDuplicates(nums))