function foo() {
if (true) {
    let blockVar = "我在块级作用域中";
    var oldVar = "我在函数作用域中";
  }    
}


  // console.log(blockVar); // 尝试在块外部访问块级变量，这会导致错误
  console.log(oldVar); // 由于 "oldVar" 使用了 var 声明，它在块外部也可见

foo();

