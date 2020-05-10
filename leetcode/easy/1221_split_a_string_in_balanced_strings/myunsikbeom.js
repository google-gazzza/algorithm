/**
 * @param {string} s
 * @return {number}
 */
//Runtime: 56 ms, faster than 62.78% of JavaScript online submissions for Split a String in Balanced Strings.
//Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for Split a String in Balanced Strings.
var balancedStringSplit = function(s) {
    var result=0,llen=0,rlen=0;
    s.split('').forEach(function(e,i){
        llen = (e === 'L' ? llen+1 : llen);
        rlen = (e === 'R' ? rlen+1 : rlen);
        if(llen === rlen){
            result += 1;
            llen = 0;
            rlen = 0;
        }
        
    })
    return result;
    
};
