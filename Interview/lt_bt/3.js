// 1,234,567  国外标准货币表达方式

function formatNumberWithCommas(number) {
    // 类型检测 
    if (typeof num !== 'number') {
        return '';
    }
    // 先转成字符串
    number += '';
    // 支持小数,按小数点分成两部分  使用了es6解构
    let [integer, decimal] = number.split('.');
    // 封装了doSplit方法 第二个参数isInteger来表示是整数部分还是小数部分
    const doSplit = (num, isInteger = true) => {
        // 如果为空，直接返回
        if (num === '') return '';
        // 如果是整数部分  先按位切割再返转
        // 整数部分数字从右往左数，每3位插入一个逗号
        // 小数部分从左往右数
        // 两次反转，它的逗号顺序是一样的。
        if (isInteger) num = num.split('').reverse();
        let str = [];
        for (let i = 0; i < num.length; i++) {
            if (i !== 0 && i % 3 === 0) str.push(',');
            str.push(num[i]);
        }
        if (isInteger) return str.reverse().join('');
        return str.join('');
    };
    integer = doSplit(integer);
    decimal = doSplit(decimal, false);
    return integer + (decimal === '' ? '' : '.' + decimal);
};