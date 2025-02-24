// 3136-valid-word
// URL: https://leetcode.com/problems/valid-word/description/


function isSastisfyMinimumLengthCondition(str: string): boolean {
    return str.length >= 3;
  }
  
  function isOnlydigitsAndEnglishLetters(str: string): boolean {
    return /^[a-zA-Z0-9]*$/.test(str);
  }
  
  function hasVowel(str: string): boolean {
    return /[aeiou]/i.test(str);
  }
  
  function hasConsonant(str: string): boolean {
    return /[bcdfghjklmnpqrstvwxyz]/i.test(str);
  }
  
  function isValid(word: string): boolean {
    return isSastisfyMinimumLengthCondition(word)
      && isOnlydigitsAndEnglishLetters(word)
      && hasVowel(word)
      && hasConsonant(word);
  };
  