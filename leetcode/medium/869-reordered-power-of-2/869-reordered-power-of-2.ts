/*
869-reordered-power-of-2
leetcode/medium/869. Reordered Power of 2
URL: https://leetcode.com/problems/reordered-power-of-2/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

/*
NOTE: I was solving use permutation at first, but it was too slow.
  so I changed to count digits and compare.
 */

  function countDigits(numStrings: string[]): Map<string, number> {
    const map: Map<string, number> = new Map();
  
    for (let i = 0; i < numStrings.length; i += 1) {
      const num = numStrings[i];
      if (!map.has(num)) {
        map.set(num, 0);
      }
      map.set(num, map.get(num) + 1);
    }
  
    return map;
  }
  
  function countDigitsAndConvertToString(num: number): string {
    const numArray = num.toString()
      .split('')
      .sort((a, b) => b.localeCompare(a));
    const countDigitsN = Array.from(countDigits(numArray).entries());
    countDigitsN.sort((a: [string, number], b: [string, number]) => a[0].localeCompare(b[0]));
  
    return countDigitsN.map((a) => a.join('')).join('');
  }
  
  function reorderedPowerOf2(n: number): boolean {
    if (n === 1) {
      return true;
    }
  
    const nArray = n.toString()
      .split('')
      .sort((a, b) => b.localeCompare(a));
    const countDigitsNString = countDigitsAndConvertToString(n);
    const nMax = Number(nArray.join(''));
    const maxPower = Math.ceil(Math.log2(nMax));
  
    for (let i = maxPower; i >= 0; i -= 1) {
      const currentCountDigitsString = countDigitsAndConvertToString(2 ** i);
      if (currentCountDigitsString === countDigitsNString) {
        return true;
      }
    }
  
    return false;
  }
  
  let n = 1;
  console.log(reorderedPowerOf2(n));
  // Ouput: true
  
  n = 10;
  console.log(reorderedPowerOf2(n));
  // Output: false
  
  n = 8;
  console.log(reorderedPowerOf2(n));
  
  n = 24;
  console.log(reorderedPowerOf2(n));
  
  n = 46;
  console.log(reorderedPowerOf2(n));
  
  n = 83276;
  console.log(reorderedPowerOf2(n));
  
  // function findPowerOfTwo(prefix: string[], current: string[], result: string[]) {
  //   if (current.length === 0) {
  //     result.push(prefix.join(''));
  //   }
  //
  //   for (let i = 0; i < current.length; i += 1) {
  //     if (current[i] === '0' && prefix.length === 0) {
  //       continue;
  //     }
  //     const newPrefix = [...prefix, current[i]];
  //     const newCurrent = [...current.slice(0, i), ...current.slice(i + 1)];
  //     findPowerOfTwo(newPrefix, newCurrent, result);
  //   }
  // }
  //
  // function isPowerOfTwo(n: number): boolean {
  //   if (Math.log2(n) % 1 === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  //
  // function reorderedPowerOf2(n: number): boolean {
  //   if (n === 1) {
  //     return true;
  //   }
  //
  //   const nStr = n.toString().split('');
  //   const result = [];
  //   findPowerOfTwo([], nStr, result);
  //
  //   for (let i = 0; i < result.length; i += 1) {
  //     if (isPowerOfTwo(parseInt(result[i], 10))) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  