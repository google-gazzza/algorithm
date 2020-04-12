// https://www.codewars.com/kata/5e4217e476126b000170489b/

const polydivisible = (x) => !!String(x).split('')
  .reduce((a, c, i) => {
    const number = Number(a + c);
    if (number % (i + 1) === 0) {
      return String(number);
    }
    return false;
  });

console.log(polydivisible(1232), true);
console.log(polydivisible(123220), false);
