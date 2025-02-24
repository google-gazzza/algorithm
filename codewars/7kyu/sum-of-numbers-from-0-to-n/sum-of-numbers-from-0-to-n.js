// sum-of-numbers-from-0-to-n
// Sum of numbers from 0 to N
// difficulty: 7kyu
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/

class SequenceSum {
  static showSequence(n) {
    const result = [];
    let sum = 0;
    
    if (n === 0) {
      return '0=0';
    }
    if (n < 0) {
      return `${n}<0`;
    }
    
    for (let i = 0; i <= n; i += 1) {
      result.push(i);
      sum += i;
    }
    
    return `${result.join('+')} = ${sum}`;
  };
}


console.log(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21");
