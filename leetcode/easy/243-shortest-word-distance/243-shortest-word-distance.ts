/*
243-shortest-word-distance
leetcode/easy/243. Shortest Word Distance
Difficulty: easy
URL: https://leetcode.com/problems/shortest-word-distance/

*/

function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
    let min = Number.MAX_SAFE_INTEGER;
  
    for (let i = 0; i < wordsDict.length; i++) {
      if (wordsDict[i] === word1) {
        let word1Index = i;
  
        for (let j = 0; j < wordsDict.length; j++) {
          if (wordsDict[j] === word2) {
            let word2Index = j;
            min = Math.min(min, Math.abs(word1Index - word2Index));
          }
        }
      }
    }
  
    return min;
  };
  
  
  // Example 1:
  //
  let wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'];
  let word1 = 'coding';
  let word2 = 'practice';
  // Output: 3
  console.log(shortestDistance(wordsDict, word1, word2));
  
  
  // Example 2:
  //
  wordsDict = ['practice', 'makes', 'perfect', 'coding', 'makes'];
  word1 = 'makes';
  word2 = 'coding';
  // Output: 1
  console.log(shortestDistance(wordsDict, word1, word2));
  