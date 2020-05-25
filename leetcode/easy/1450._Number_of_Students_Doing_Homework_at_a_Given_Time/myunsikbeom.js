/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
//Runtime: 68 ms, faster than 61.86% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
//Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
var busyStudent = function(startTime, endTime, queryTime) {
    let result = 0;
    for(let i=0;i<startTime.length;i++){
        if(startTime[i] <=queryTime && endTime[i] >=queryTime){
            result++;
        }
    }
    return result;
};
