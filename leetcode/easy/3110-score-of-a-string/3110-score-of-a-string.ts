// 3110-score-of-a-string
// URL: https://leetcode.com/problems/score-of-a-string/description/
function scoreOfString(s: string): number {
    let lastAscii = 0;
    let score = 0;
  
    lastAscii = s.charCodeAt(0);
  
    for (let i = 1; i < s.length; i++) {
      let ascii = s.charCodeAt(i);
      score += Math.abs(ascii - lastAscii);
      lastAscii = ascii;
    }
  
    return score;
  };
  