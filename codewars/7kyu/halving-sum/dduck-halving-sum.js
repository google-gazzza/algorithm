// halving-sum
// Halving Sum
// difficulty: 7kyu
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

const halvingSum = (n, step = 0, sum = 0) => {
  if ((n / (2 ** step)) >= 1) {
    return halvingSum(n, step + 1, sum + Math.floor(n / (2 ** step)));
  }
  
  return sum;
};



console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
