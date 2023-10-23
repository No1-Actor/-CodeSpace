function foo(str, a) {
    eval(str) // 把字符串内容搬入到此处
    console.log(a, b);
}
foo('var b = 3', 1)
