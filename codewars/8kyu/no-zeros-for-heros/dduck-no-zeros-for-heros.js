// no-zeros-for-heros
// No zeros for heros
// difficulty: 8kyu
// https://www.codewars.com/kata/570a6a46455d08ff8d001002
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/no-zeros-for-heros

const noBoringZeros = (n) => {
  if (n % 10 !== 0 || Math.abs(n) < 10) {
    return n;
  }
  
  return noBoringZeros(Math.floor(n / 10));
};



console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
