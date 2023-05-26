// sum-consecutives
// https://www.codewars.com/kata/55eeddff3f64c954c2000059

const sumConsecutives = (s) => {
  s.push(null);
  let num = s[0];
  let sum = 0;
  let result = [];
  
  for (let i = 0; i < s.length; i += 1) {
    if (num !== s[i]) {
      result.push(sum);
      sum = 0;
      num = s[i];
    }
    if (num === s[i]) {
      sum += s[i];
    }
  }
  
  return result;
};
