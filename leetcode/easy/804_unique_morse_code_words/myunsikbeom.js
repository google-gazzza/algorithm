/**
 * @param {string[]} words
 * @return {number}
 */
//Runtime: 56 ms, faster than 84.18% of JavaScript online submissions for Unique Morse Code Words.
//Memory Usage: 35.4 MB, less than 55.56% of JavaScript online submissions for Unique Morse Code Words.
var uniqueMorseRepresentations = function(words) {
  const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let morseWordArr = new Set();
    words.forEach(word => {
        let morseStr = "";
        for(let i=0;i<word.length;i++){
            morseStr +=morseArr[word.charAt(i).charCodeAt()-97];
        }
        morseWordArr.add(morseStr);
    })
    return morseWordArr.size;
};
