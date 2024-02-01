/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//Runtime: 116 ms, faster than 60.74% of JavaScript online submissions for Reverse String.
//Memory Usage: 46.2 MB, less than 100.00% of JavaScript online submissions for Reverse String.
var reverseString = function(s) {
  var _s = JSON.parse(JSON.stringify(s));  
  for(var i = s.length-1;i>=0;i--){ 
      s[s.length-1 - i] = _s[i];
  }  
};
