// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
// Runtime: 48 ms, faster than 89.41% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Letter Combinations of a Phone Number.
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const input = digits.split('');
    
    let calCombination = (arr, set) => {
        if (!arr || !arr.length) return set;
        let c = arr.pop();
        let list = map[c];
        if (set.length) {
            let newset = [];
            list.forEach(s1 => set.forEach(s2 =>newset.push(s1+s2)))
            return calCombination(arr, newset);
        }
        return calCombination(arr, list);
    }
    return calCombination(input, []);
};