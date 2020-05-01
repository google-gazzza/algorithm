// validate-credit-card-number
// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

const validate = (n) => {
  const str = String(n).split('');
  const isEven = str.length % 2 === 0;
  return str.map((v, i) => {
    if (isEven === (i % 2 === 0)) {
      const num = Number(v) * 2;
      if (num > 9) {
        return String(num).split('').reduce((a, c) => a + Number(c), 0);
      }
      return num;
    }
    return Number(v);
  }).reduce((a, c) => a + c, 0) % 10 === 0;
};

console.log(validate(1714), false);
console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
