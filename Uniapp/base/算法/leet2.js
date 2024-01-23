nums = [1,1,2]
function removeDuplicates(nums) {
    if (nums.length === 0) {
      return 0; // 处理空数组的情况
    }
  
    let i = 0; // 当前不重复元素的位置
  
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++; // 更新不重复元素的位置
        nums[i] = nums[j]; // 复制新的不重复元素
      }
    }
  
    return i + 1; // 返回新长度
  }
  console.log(removeDuplicates(nums))
  