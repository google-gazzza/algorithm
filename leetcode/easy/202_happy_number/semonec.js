// https://leetcode.com/problems/happy-number/submissions/
// Runtime: 60 ms, faster than 82.46% of JavaScript online submissions for Happy Number.
// Memory Usage: 37.2 MB, less than 23.08% of JavaScript online submissions for Happy Number.
/**
 * @param {number} n
 * @return {boolean}
 */
let divide = (number) => {
    return number.toString()
        .split('')
        .map( v => Number.parseInt(v))
}

var isHappy = function(n) {
    parseHappy = (number, list) => {
        let sum = 0;
        divide(number).forEach(v => sum += v * v);
        if (sum === 1) return true;
        if (list[sum]) return false;
        list[sum] = true;
        return parseHappy(sum, list);
    }
    let obj = {};
    obj[n] = true;
    return parseHappy(n, obj);
};