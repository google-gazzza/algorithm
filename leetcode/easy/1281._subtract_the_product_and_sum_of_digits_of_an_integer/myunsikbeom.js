/**
 * @param {number} n
 * @return {number}
 */
//Runtime: 52 ms, faster than 78.07% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
Next challenges:
var subtractProductAndSum = function(n) {
    var arr = String(n).split("");
    return arr.reduce((acc,cur,i) => { return acc*cur }) - arr.reduce((acc,cur,i) => { return Number(acc)+Number(cur) });
};
