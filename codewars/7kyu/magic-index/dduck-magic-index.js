// https://www.codewars.com/kata/57d5fed61a6282bf6f002a5f

const findMagic = (arr) => arr.map((v, i) => (v === i ? i : false))
  .filter((v) => Number(v))[0] || -1;

findMagic([-20, -10, 2, 10, 20]); // Returns 2
//?
