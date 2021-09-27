/**
 * @param {number[][]} points
 * @return {number}
 */
//Runtime: 76 ms, faster than 19.33% of JavaScript online submissions for Minimum Time Visiting All Points.
//Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Minimum Time Visiting All Points.
var minTimeToVisitAllPoints = function(points) {
    let visitPoints = 0;
    points.reduce((acc,cur,i,arr) => {
        acc = !acc ? arr[i-1] : acc; 
        while(acc[0] !== cur[0] || acc[1] !== cur[1]){
            
            if(acc[0] > cur[0]){
                acc[0]-=1;
            }else if(acc[0] < cur[0]){
                acc[0]+=1;
            }
            if(acc[1] > cur[1]){
                acc[1]-=1;
            }else if(acc[1] < cur[1]){
                acc[1]+=1;
            }
            visitPoints++;
        }
    });
    return visitPoints;
};
