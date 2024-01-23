// // 斐波那契数列
  function fb(n) {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      return fb(n - 1) + fb(n - 2);
    }
  }
  
  console.log(fb(10)); // 输出斐波那契数列的第10个数字
  