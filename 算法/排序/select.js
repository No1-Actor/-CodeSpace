let arr = [1, 3, 2, 5, 4]

// 选择排序
function selectSort(arr) { // 不断的缩小区间，在区间中找到最小值，放到区间的最前面
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
console.log(selectSort(arr));