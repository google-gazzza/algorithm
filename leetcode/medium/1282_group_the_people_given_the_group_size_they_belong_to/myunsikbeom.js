/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
//Runtime: 76 ms, faster than 83.79% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
//Memory Usage: 37.2 MB, less than 100.00% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
var groupThePeople = function(groupSizes) {
    let result = [];
    let groupset = Array.from(new Set(groupSizes)).sort((a,b) => {return a-b});
    groupset.forEach(set=>{
        let arr = [];
        groupSizes.forEach((size,i) =>{
            if(arr.length !== size && set === size){
                arr.push(i);
            }
            if(arr.length === set){
                result.push(arr);
                arr = [];
            }
        });
    });
    return result;
};
