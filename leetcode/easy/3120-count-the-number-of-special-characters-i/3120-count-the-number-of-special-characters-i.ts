// 3120-count-the-number-of-special-characters-i
// URL: https://leetcode.com/problems/count-the-number-of-special-characters-i/description/

function numberOfSpecialChars(word: string): number {
    const lowerCaseSet: Set<string> = new Set();
    const upperCaseSet: Set<string> = new Set();
  
    let specialChars = 0;
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
  
      if (char < 'a') {
        upperCaseSet.add(char);
      } else {
        lowerCaseSet.add(char);
      }
    }
  
    for (let char of lowerCaseSet) {
      if (upperCaseSet.has(char.toUpperCase())) {
        specialChars++;
      }
    }
  
    return specialChars;
  };
  
  let word = "aaAbcBC";
  console.log(numberOfSpecialChars(word));
  // 3
  
  