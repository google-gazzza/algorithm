/*
415-add-strings

# leetcode/easy/415. Add Strings
Difficulty: easy
URL: https://leetcode.com/problems/add-strings/
Tags:

## Approach

### en

### kr

## Solution
### TypeScript

*/
function addStrings(num1, num2) {
    var _a;
    var longestString = ['0'].concat(num1.split('')).reverse();
    var shortestString = ['0'].concat(num2.split('')).reverse();
    if (longestString.length < shortestString.length) {
        _a = [shortestString, longestString], longestString = _a[0], shortestString = _a[1];
    }
    var result = longestString.map(function (e, i, arr) {
        var sum = Number(e) + Number(shortestString[i] || 0);
        arr[i + 1] = (Number(arr[i + 1]) + Math.floor(sum / 10)).toString();
        return (sum % 10).toString();
    })
        .reverse()
        .join('');
    result = result.replace(/^0/, '');
    return result;
}
;
console.log(addStrings('99999991', '12'));
console.log(addStrings('1', '2'));
//# sourceMappingURL=dduck-415-add-strings.js.map
