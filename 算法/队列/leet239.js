let arr = [1, 3, -1, -3, 5, 3, 6, 7];

// var maxSlidingWindow = function (nums, k) {
//     let left = 0, right = k - 1, res = [];
//     while(right < nums.length){
//         const max = calMax(left, right)
//         res.push(max)
//         left++
//         right++
//     }

//     function calMax(x, y) {
//         let maxNum = -Infinity; // Infinity 无穷大
//         for(let i = x; i <= y; i++){
//             if(nums[i] > maxNum) maxNum = nums[i]
//         }
//         return maxNum
//     }
//     return res
// }

// console.log(maxSlidingWindow(arr, 3));

function maxSlidingWindow(nums, k) {
     const res = [];
     const len = nums.length;
     const deque = []; // 双端队列
     for (let i = 0; i < len; i++) {
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop()
        }
        deque.push(nums[i])
        
        // 对头元素是不是已经出窗口了
        if(deque[0] <= i - k){
            deque.shift()
        }
        
        if(i >= k - 1){
            res.push(nums[deque[0]]) // 开始记录最大值
        }
    }
     return res;
}
console.log(maxSlidingWindow(arr, 3));