/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
//Runtime: 60 ms, faster than 91.94% of JavaScript online submissions for Queries on a Permutation With Key.
//Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for Queries on a Permutation With Key.
var processQueries = function(queries, m) {
    let p=[],result = [];
    
    for(let i=0;i<m;i++){
        p.push(i+1);
    }
    queries.forEach((num,i) =>{
        let findIndex = p.findIndex(n => {return n === num});
        result.push(findIndex);
        p.splice(findIndex,1);
        p.unshift(num);
    });
    return result;
};
