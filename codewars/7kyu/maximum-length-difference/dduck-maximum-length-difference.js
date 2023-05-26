// maximum-length-difference
// Maximum Length Difference
// https://www.codewars.com/kata/5663f5305102699bad000056/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/maximum-length-difference

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  
  const a1Length = a1.map((v) => v.length);
  const a2Length = a2.map((v) => v.length);
  
  return Math.max((Math.max(...a1Length) - Math.min(...a2Length)), (Math.max(...a2Length) - Math.min(...a1Length)));
};

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);
