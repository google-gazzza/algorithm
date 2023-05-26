// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// [JS]6kyu] Counting Duplicates
// counting-duplicates

const duplicateCount = (text) => {
  const strMap = new Map();
  let result = 0;
  for (let str of text) {
    const adjustStr = str.toLowerCase();
    const count = strMap.get(adjustStr) || 0;
    if (count === 1) {
      strMap.set(adjustStr, count + 1);
      result += 1;
    } else if (count === 0) {
      strMap.set(adjustStr, 1);
    }
  }

  return result;
};

duplicateCount("") === 0;
duplicateCount("abcde") === 0;
duplicateCount("aabbcde") === 2;
duplicateCount("aabBcde") === 2;
duplicateCount("Indivisibility") === 1;
duplicateCount("Indivisibilities") === 2;
