/**
 * @param {string[][]} paths
 * @return {string}
 */
//Runtime: 60 ms, faster than 79.29% of JavaScript online submissions for Destination City.
//Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Destination City.
var destCity = function(paths) {
    let destination = paths[0][1],i=1;
    if(paths.length>1){
        for(let i=1;i<paths.length;i++){
            for(let j = 0;j<paths.length;j++ ){
              if(paths[j][0] === destination){
                destination = paths[j][1];
                }  
            }
        }
    }
        
    return destination;
};
