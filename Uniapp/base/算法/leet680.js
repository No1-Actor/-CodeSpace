let str = 'abca'

var validPalindrome = function (s) {
    const len = s.length
    let i = 0, j = len - 1
    while (i < j && s[i] === s[j]) {
        i++
        j--
    }

    // 尝试跳过 i，或者 j
    if (isPalindrome(i + 1, j)) {
        return true
    }
    if (isPalindrome(i, j - 1)) {
        return true
    }

    function isPalindrome(st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false
            }
            st++
            de--
        }
        return true
    }
    return false
}
