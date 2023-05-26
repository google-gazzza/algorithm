// sum-strings-as-numbers
// Sum Strings as Numbers
// difficulty: 4kyu
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

const sumStrings = (a, b) => {
  if (a.length < b.length) {
    [a, b] = [b, a];
  }
  
  a = [...a].reverse();
  b = [...b].reverse();
  let result = [];
  
  for (let i = 0; i < a.length; i += 1) {
    let sum = Number(a[i]) + (Number(b[i]) || 0);
    
    if (sum >= 10) {
      a[i + 1] = (Number(a[i + 1]) || 0) + 1;
      sum %= 10;
    }
    
    result.push(String(sum));
  }
  
  result = result.reverse().join('');
  
  return result.slice((result.match(/[1-9]/).index || 0));
};

console.log(sumStrings('123', '456'), '579');
// ?;
console.log(sumStrings('8797', '45'));
//? 8842
console.log(sumStrings('99', '1'));
//?  100
// - Expected: '100'
console.log(sumStrings('00103', '08567'));
//?
//   Expected: '8670'
