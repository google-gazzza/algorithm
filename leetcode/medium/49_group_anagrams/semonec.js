// https://leetcode.com/problems/group-anagrams/submissions/
// Runtime: 128 ms, faster than 82.00% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 45.8 MB, less than 21.74% of JavaScript online submissions for Group Anagrams.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for (let str of strs) {
        let key = str.split('').sort((a,b) => a.charCodeAt()-b.charCodeAt());
        if (map[key.toString()])
            map[key.toString()] = [...map[key.toString()], str];
        else
            map[key.toString()] = [str];
    }
    
    let result = [];
    for (let key in map) {
        result.push(map[key]);
    }
    return result;
};