/**
 * @param {string[]} operations
 * @return {number}
 * Runtime: 110 ms
    Memory Usage: 43.9 MB
 */
 var finalValueAfterOperations = function(operations) {
    return operations.map(o=> Number(o.replace('X','').replace('--','-1').replace('++','1')))
        .reduce((prev,curr)=>prev+curr,0)
};