/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const arr = Array.from(String(x), Number) // [ 1,2,1 ]

    for (let i = 0; i < arr.length; i++) { // 0 1 2
        // 1 / 1 - 2 / 2 - 1 / 1
        if (arr[i] !== arr[arr.length - i - 1]) {
            return false
        }
    }

    return true
}



console.log("output: " + isPalindrome(121) + " Expected: true")
console.log("output: " + isPalindrome(-121) + " Expected: false")

