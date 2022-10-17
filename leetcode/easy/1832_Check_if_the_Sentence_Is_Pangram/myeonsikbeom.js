/**
 * @param {string} sentence
 * @return {boolean}
 Runtime: 106 ms, faster than 40.21% of JavaScript online submissions for Check if the Sentence Is Pangram.
 Memory Usage: 41.9 MB, less than 93.97% of JavaScript online submissions for Check if the Sentence Is Pangram.
 
 */
var checkIfPangram = function(sentence) {
    return ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        .every(alphabat=>sentence.indexOf(alphabat) !== -1)
};