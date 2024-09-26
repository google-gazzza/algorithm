// financing-plan-on-planet-xy140z-nj
// Financing Plan on Planet XY140Z-nj
// difficulty: 6kyu
// https://www.codewars.com/kata/559ce00b70041bc7b600013d/

const finance = (n, w = 0, sum = 0) => {
  sum += (3 * w * (w + 1)) / 2;
  return w === n ? sum : finance(n, w + 1, sum);
};

console.log(finance(5), 105);
console.log(finance(6), 168);
console.log(finance(8), 360);
console.log(finance(15), 2040);


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
