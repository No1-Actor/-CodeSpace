var arr = [1, [2, [3, 4]]]
var newArr = arr.flat(Infinity) // flat 数组扁平化操作  infinity 无穷大  
function fd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) { // isArray 判断是否是数组
        result = result.concat(fd(arr[i]));  // concat 数组拼接
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(fd([1, [2, [3, 4]]])); 
  