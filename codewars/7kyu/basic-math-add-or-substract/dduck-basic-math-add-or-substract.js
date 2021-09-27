// https://www.codewars.com/kata/5809b62808ad92e31b000031

const calculate = (str) => str.replace(/plus/g, 'm+m')
  .replace(/minus/g, 'm-m')
  .split('m')
  .reduce((acc, cur, index, arr) => {
    if (cur === '+' || cur === '-') {
      if (cur === '+') {
        acc += parseInt(arr[index + 1], 10);
      } else {
        acc -= parseInt(arr[index + 1], 10);
      }
      arr.splice(index, 1);
    } else {
      acc += parseInt(cur, 10);
    }
    return acc;
  }, 0)
  .toString();

console.log(calculate('1plus2plus3plus4'), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');

// Best practice in codewars
//
// function calculate(str) {
//   return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
// }
