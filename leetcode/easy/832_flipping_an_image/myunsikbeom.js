/**
 * @param {number[][]} A
 * @return {number[][]}
 */
//Runtime: 60 ms, faster than 90.91% of JavaScript online submissions for Flipping an Image.
//Memory Usage: 35.1 MB, less than 41.67% of JavaScript online submissions for Flipping an Image.
var flipAndInvertImage = function(A) 
    return A.map(arr =>  
        arr.reverse().map(num=>{return num === 1 ? 0 : 1;})
    );
};
