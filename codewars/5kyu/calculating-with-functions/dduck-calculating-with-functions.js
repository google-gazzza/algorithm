// calculating-with-functions
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const operate = (num) => (operator) => operator ? operator(num) : num;

const zero = operate(0);
const one = operate(1);
const two = operate(2);
const three = operate(3);
const four = operate(4);
const five = operate(5);
const six = operate(6);
const seven = operate(7);
const eight = operate(8);
const nine = operate(9);

const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => b * a;
const dividedBy = (a) => (b) => Math.floor(b / a);

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
