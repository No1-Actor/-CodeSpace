let arr = [1, 1, '2', 3, 1, 2,
    {name: '张三', id: {n: 1}},
    {name: '张三', id: {n: 1}},
    {name: '张三', id: {n: 2}},
]
//  借助api实现数组去重
// let arr2 = arr.map(item => {
//     return JSON.stringify(item)
// })

// let newArr = new Set(arr2)
// newArr = Array.from(newArr).map(item => {
//     return JSON.parse(item)
// })

// console.log(newArr);


function uniqueArr(arr){
    let res = []
    for(let item of arr){
        let isFind = false

        for(let resItem of res){
            if(equal(item, resItem)){
                break
            }
        }
        if(!isFind)res.push(item)
    }
    return res
}
console.log(uniqueArr(arr));


function equal(v1, v2){
    if((typeof v1 === 'object' && v1 != null) && (typeof v2 === 'object' && v2 != null)){
        if(Object.keys(v1).length !== Object.keys(v2).length) return false
        for(let key in v1){
            if(v2,hasOwnProperty(key)){
                if(equal(v1[key], v2[key])){
                    isFind = true
                }
            }else{
                return false
            }
        }
    }else{
        return v1 === v2
    }
}