// basics-03-strings-numbers-and-calculation
// https://www.codewars.com/kata/56b5dc75d362eac53d000bc8

const parseNumber = (str) => Number(str.match(/[.0-9]/gm).join(''));
const parseResult = (num) => Math.round((num)).toString();

const calculateString = (st) => {
  const operator = st.match(/(\/|\*|\+|\-)/);
  const index = operator.index;
  const a = parseNumber(st.slice(0, index));
  const b = parseNumber(st.slice(index + 1));
  
  switch (operator[0]) {
    case '/':
      return parseResult(a / b);
    case '*':
      return parseResult(a * b);
    case '+':
      return parseResult(a + b);
    case '-':
      return parseResult(a - b);
  }
};

console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"), "47");
console.log(calculateString("sdfsd23454sdf*2342"), "54929268");
console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"), "-210908");
console.log(calculateString("fsdfsd234.4554s4234df+sf234442"), "234676");
console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c"), '12');
