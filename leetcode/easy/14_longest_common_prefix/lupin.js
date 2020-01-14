// https://leetcode.com/problems/longest-common-prefix/
// Runtime: 52 ms, faster than 93.83% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.2 MB, less than 31.25% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return "";

    let prefix = strs.reduce((accu, curr)=>{
        for(let i=0; i<accu.length; i++){
            if(curr[i]!=accu[i]){
                accu = accu.slice(0,i);
                break;
            }
        }
        return accu;
    }, strs[0]);

    return prefix;
};