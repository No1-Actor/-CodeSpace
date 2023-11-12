function instanceOF(L, R) {
    let left = L.__proto__
    let right = R.prototype
    while(left !== null){
        if(left === right) return true
        left = left.__proto__
    }
    return false
}
instanceOF([], Array) // true
instanceOF({}, Object) // true