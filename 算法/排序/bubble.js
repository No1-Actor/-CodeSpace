let arr = [1, 3, 2, 5, 4]

// arr.sort((x, y) => {
//     return x - y
// })
// console.log(arr);

// 冒泡排序
function bubble(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
console.log(bubble(arr));

// function bubble(arr) {
//     let len = arr.length
//     let res = []
//     while (len) {
//         let min = getMin(arr)
//         res.push(min)
//         arr.splice(arr.indexOf(getMin(arr)), 1)
//         len--
//     }

//     getMin(arr)
//     // 找数组最小值
//     function getMin(array){
//         let min = Infinity
//         for (let i = 0; i < len; i++) {
//             if(array[i] < min) {
//                 min = array[i]
//             }
//         }
//         return min
//     }
// }