// https://www.codewars.com/kata/5a58d889880385c2f40000aa/

const automorphic = (n) => {
  const convertedDigits = Number(String(n ** 2)
    .split('')
    .slice(-String(n).length)
    .join(''));
  if (n === convertedDigits) {
    return 'Automorphic';
  }
  return 'Not!!';
};

console.log(automorphic(1), 'Automorphic');
console.log(automorphic(3), 'Not!!');
console.log(automorphic(6), 'Automorphic');
console.log(automorphic(9), 'Not!!');
console.log(automorphic(25), 'Automorphic');
console.log(automorphic(53), 'Not!!');
console.log(automorphic(76), 'Automorphic');
console.log(automorphic(95), 'Not!!');
console.log(automorphic(625), 'Automorphic');
console.log(automorphic(225), 'Not!!');

/*
best practice in codewars
const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!" ;
 */
