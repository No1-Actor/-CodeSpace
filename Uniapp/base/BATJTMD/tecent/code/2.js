// hackthon 
function createPhoneNumber(numbers){
    var format = '(XXX) XXX-XXXX'
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('X', numbers[i]) // 考点常有      
    }
    return format
}
// leetcode 题解

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));