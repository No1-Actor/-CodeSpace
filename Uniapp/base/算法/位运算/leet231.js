// 保证 num 是正整数
if (num <= 0) {
    return false;
}
// 判断是否只有一位是1
// 1000 & 0111 = 0
return (num & (num - 1)) === 0;