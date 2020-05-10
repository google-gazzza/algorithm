/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//Runtime: 56 ms, faster than 76.88% of JavaScript online submissions for Kids With the Greatest Number of Candies.
//Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Kids With the Greatest Number of Candies.
var kidsWithCandies = function(candies, extraCandies) {
    let max = candies.reduce((acc,cur) => {return acc < cur ? cur : acc});
    return candies.map(data => data + extraCandies >= max ? true : false)
    
};
