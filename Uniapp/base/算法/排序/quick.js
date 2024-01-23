let arr = [1, 3, 2, 5, 4]

// 快速排序
function quickSort(arr) {    
    if (arr.length <= 1) return arr
    const base = arr[0];
    let left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), base, ...quickSort(right)];
}
console.log(quickSort(arr));