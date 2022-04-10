/**
 * @param {string} s
 * @return {string}
 You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
 */
/*
Runtime: 72 ms, faster than 94.30% of JavaScript online submissions for Replace All Digits with Characters.
Memory Usage: 38.7 MB, less than 52.01% of JavaScript online submissions for Replace All Digits with Characters.
*/

var replaceDigits = function(s) {
    let result = [];
    s.split('').forEach((char,i,s)=>{
        if(i%2 !== 0){//짝수일때
            char=shift(s[i-1],Number(char));
        }
        result.push(char);
    });
    return result.join('');
};
/*character에서 shiftNumber만큼 숫자를 이동시키는 함수*/
let shift = function(character,shiftNumber){
    let asciiNum = character.charCodeAt(); //character의 ascii값을 구한다.
    asciiNum+=shiftNumber //shiftNumber만큼 ascii코드값 증가
    //'z'아스키코드값보다 크면 'z'문자열 변환
    return String.fromCharCode(asciiNum > 122 ? 122:asciiNum);
}
