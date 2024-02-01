// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/

const disariumNumber = (n) => {
  const result = String(n)
    .split('')
    .map((v, i) => Number(v) ** (i + 1))
    .reduce((a, c) => (a + c));
  
  return result === n ? 'Disarium !!' : 'Not !!';
};

console.log(disariumNumber(89), 'Disarium !!');
console.log(disariumNumber(564), 'Not !!');
console.log(disariumNumber(1024), 'Not !!');
console.log(disariumNumber(135), 'Disarium !!');
console.log(disariumNumber(136586), 'Not !!');
