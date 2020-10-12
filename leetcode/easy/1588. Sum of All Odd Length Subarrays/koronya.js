/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0
    const arrLen = arr.length
    
    const f = x => {
        let total = 0
        for (let i = 0; i < arrLen - (x - 1); i = i + 1 | 0) {
            total += get(x, i)
        }
        return total
    }
    
    const get = (number, start) => {
        const limit = start + number
        let total = 0
        for (let i = start; i < limit; i = i + 1 | 0) {
            total += arr[i]
        }
        return total
    }
    
    for (let i = 1; i <= arrLen; i = i + 2 | 0) {
        total += f(i)
    }
    
    return total
}
