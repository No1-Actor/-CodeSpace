// - map 遍历  callback 返回值 新的数字
console.log([1,2,3].map(parseInt)); // [1, NaN, NaN]
parseInt(1, 0, [1,2,3]) // 1
parseInt(2, 1, [1,2,3]) // NaN
parseInt(3, 2, [1,2,3]) // NaN