var missingNumber = function(nums) {
    // 对数组进行排序
    nums.sort((a, b) => a - b);
    // 获取数组的长度
    const n = nums.length;
    // 遍历数组
    for (let i = 0; i < n; i++) {
        // 如果当前元素不等于索引，则返回当前索引
        if (nums[i] !== i) {
            return i;
        }
    }
    // 如果遍历完数组仍未找到，则说明缺失的元素是最后一个元素，即数组长度加1
    return n;
};
