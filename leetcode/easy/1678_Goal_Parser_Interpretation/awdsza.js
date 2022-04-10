/**
 * @param {string} command
 * @return {string}
 */
/*정규식을 이용해 푸는방법*/
/*
Runtime: 72 ms, faster than 92.54% of JavaScript online submissions for Goal Parser Interpretation.
Memory Usage: 39.1 MB, less than 5.48% of JavaScript online submissions for Goal Parser Interpretation.
*/
var interpret = function(command) {
    return command.replace(/\(\)/g,'o').replace(/\(al\)/g,'al');
};

/*배열을 하나하나 읽어서 변환하는 방법*/
/*Runtime: 76 ms, faster than 81.02% of JavaScript online submissions for Goal Parser Interpretation.
Memory Usage: 38.9 MB, less than 9.73% of JavaScript online submissions for Goal Parser Interpretation.*/
// var interpret = function(command) {
//     let result="";
//     for(let i=0;i<command.length;i++){
//        let char = command[i];
        
//        if(char==='G'){
//            result += 'G'
//        }else if(char === '('){
//            if(command[i+1] === ')'){
//                result += 'o';
//            }else if(command[i+1] === 'a'){
//                result += 'al';
//            }
//        }
//     };
//     return result;
// };
