var arr = [1, [2, [3, 4]]]

function flaten(arr) {
    return arr.reduce(function (pre, item) {
        return pre.concat(Array.isArray(item) ? flaten(item) : item)
    }, [])
}

console.log(flaten(arr)); // 输出一维数组

arr.reduce(function (pre, item, index, arr) { // reduce 可以对数组中的每个元素进行添加
    return pre + item;
})
