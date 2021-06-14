/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
/*
내가 풀던 방식. 
Runtime: 148 ms, faster than 23.90% of JavaScript online submissions for Count the Number of Consistent Strings.
Memory Usage: 47.2 MB, less than 98.41% of JavaScript online submissions for Count the Number of Consistent Strings.
*/
var countConsistentStrings = function(allowed, words) {
  let result = 0;
    words.forEach((word)=>{
        let isConsistent=true;
        for(let i=0;i<word.length;i++){
            let char = word.charAt(i);
            if(allowed.indexOf(char) === -1){
               isConsistent=false;
                break;
           }
        }
        result += (isConsistent ? 1 : 0);
    })
    return result;
};
