// https://leetcode.com/problems/ransom-note/
// Runtime: 84 ms, faster than 46.51% of JavaScript online submissions for Ransom Note.
// Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Ransom Note.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    
    for (let i = 0; i < magazine.length; i++) {
        const c = magazine[i];
        if (!map.has(c))
            map.set(c, 0);
        map.set(c, map.get(c) + 1);
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const c = ransomNote[i];
        if (!map.has(c) || map.get(c) < 1)
            return false;
        map.set(c, map.get(c) - 1);
    }
    return true;
};