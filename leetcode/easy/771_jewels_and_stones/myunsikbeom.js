/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//Runtime: 60 ms, faster than 62.65% of JavaScript online submissions for Jewels and Stones.
//Memory Usage: 34.3 MB, less than 49.25% of JavaScript online submissions for Jewels and Stones.
var numJewelsInStones = function(J, S) {
    let result = 0;
    J.split('').forEach(js => {
        result += S.split(js).length-1;
    })
    return result;
};
