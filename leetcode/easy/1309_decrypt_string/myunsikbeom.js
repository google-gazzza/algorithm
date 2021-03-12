/**
 * @param {string} s
 * @return {string}
 */
//Runtime: 56 ms, faster than 59.42% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
//Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
var freqAlphabets = function(s) {
    s=s.toLowerCase();
    let splitSharp = s.match(/\d{1,}\#*/gi),result = "";
    for(let i=0;i<splitSharp.length;i++){
         if(splitSharp[i].indexOf('#') > -1){
             if(splitSharp[i].replace('#','').length > 2){
                 let zeroTolast2Num = splitSharp[i].substring(0,splitSharp[i].length-3);
                 zeroTolast2Num.split('').forEach(el => {
                   result += String.fromCharCode(96+Number(el));
                 });
                 let last2Num = splitSharp[i].substring(splitSharp[i].length-3).replace('#','');
                 result += String.fromCharCode(96+Number(last2Num));
             }else{
                 result += String.fromCharCode(96+Number(splitSharp[i].replace('#','')));
             }
        }else{
          splitSharp[i].split('').forEach(el =>{ result += String.fromCharCode(96+Number(el))});
        } 
        
    }
    return result;
};
