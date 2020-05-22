/**
 * @param {number[]} rating
 * @return {number}
 */
//Runtime: 84 ms, faster than 48.73% of JavaScript online submissions for Count Number of Teams.
//Memory Usage: 34.5 MB, less than 100.00% of JavaScript online submissions for Count Number of Teams.
var numTeams = function(rating) {
    var result = 0;
    if(rating.length < 3) return 0;
    else if (rating.length === 3){
        return (rating[0] < rating[1] && rating[1] < rating[2]) || (rating[0] > rating[1] && rating[1] > rating[2])
         ? 1:0;
    }
    var i=0,j=1,k=2;
    while(i<j && j<k && k<rating.length){
        if((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])){
            result ++;
        }
        if(k === rating.length -1){
            j++;
            if(j === k){
                ++i;
                j=i+1;
                k=i+2;
            }else{
              k=j+1;  
            } 
        }else{
            k++;
        }
    }
    return result;
};
