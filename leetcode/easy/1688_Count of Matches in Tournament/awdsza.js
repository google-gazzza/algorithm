/**
 * @param {number} n
 * @return {number}
 */
/*
Runtime: 72 ms, faster than 94.99% of JavaScript online submissions for Count of Matches in Tournament.
Memory Usage: 38.7 MB, less than 30.76% of JavaScript online submissions for Count of Matches in Tournament.
*/
var numberOfMatches = function(n) {
    let result = 0;
    let teams = n;
    while(teams > 1){
        result+=teams/2;
        teams-=(teams/2);
    }
    return result;
};
