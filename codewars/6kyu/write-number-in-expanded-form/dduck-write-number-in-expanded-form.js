// write-number-in-expanded-form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/

const expandedForm = (num) => String(num).split('')
  .reduceRight((a, c, i, arr) => {
    if (c === '0') {
      return a;
    }
    let result = `${c}${'0'.repeat(arr.length - 1 - i)}`;
    if (a !== '0') {
      result = `${result} + ${a}`;
    }
    return result;
  });

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
console.log(expandedForm(9000000));
