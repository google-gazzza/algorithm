//https://leetcode.com/problems/longest-common-prefix/
//Runtime: 56 ms, faster than 81.45% of JavaScript online submissions for Longest Common Prefix.
//Memory Usage: 35.1 MB, less than 34.38% of JavaScript online submissions for Longest Common Prefix.
​
/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
   let main = {
       text : '',
       inspect : function(e, x, l, j) {
           if (x) {
               if (j > 0 && main.text.length == 0) {
                   return main.text;
               } else {
                   for (let i = 0; i < l; i++) {
                       if (e[i][j] !== x) {
                           return main.text;
                       }
                   }
​
                   main.text += x;
               }
           }
       },
       
       init : function(e, l) {
           main.text = '';
           
           if (e[0] == null || e[0] == undefined) {
               return main.text;
           } else {
               for (let i = 0; i < e[0].length; i++) {
                   main.inspect(e, e[0][i], l, i);
               }
           }
           
           return main.text;
       }
   }
​
   return main.init(strs, strs.length);
};