// https://leetcode.com/problems/word-pattern/
// Runtime: 48 ms, faster than 89.62% of JavaScript online submissions for Word Pattern.
// Memory Usage: 33.7 MB, less than 90.91% of JavaScript online submissions for Word Pattern.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const arr = str.split(' ');
    
    if (arr.length !== pattern.length)
        return false;
    
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = arr[i];
        
        if (map1.has(c) && map1.get(c) !== w)
            return false;
        
        if (map2.has(w) && map2.get(w) !== c)
            return false;
        
        map1.set(c, w);
        map2.set(w, c);
    }
    
    return true;
};