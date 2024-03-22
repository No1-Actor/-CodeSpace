// 定义一个函数，用于返回数组中第三大的数
var thirdMax = function(nums) {
    // 对数组进行排序，使最大的数放在最前面
    nums.sort((a, b) => a - b);
    // 将数组反转，使最大的数放在最前面
    nums.reverse();
    // 遍历数组，从第二个数开始，比较当前数和前一个数，如果不同，则计数器 diff 加 1
    for (let i = 1, diff = 1; i < nums.length; ++i) {
        // 如果当前数和前一个数不同，且计数器 diff 等于 3，则当前数就是第三大的数
        if (nums[i] !== nums[i - 1] && ++diff === 3) { // 此时 nums[i] 就是第三大的数
            return nums[i];
        }
    }
    // 如果数组中只有三个数，则第一个数就是第三大的数
    return nums[0];
};