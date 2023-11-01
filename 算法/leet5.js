var isValid = function (s) {
    const stack = []
    const len = s.length
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < len; i++) {
        const item = s[i]
        if (item === '(' || item === '[' || item === '{'){
            stack.push(item)
            }else{
                // 判断此时item是否适配栈顶的元素
                // 将栈顶元素作为obj的key读取到value判断value是否===item
                if(!stack.length || obj[stack.pop()] !== item)
                    return false
            }
    }
    return !stack.length

};