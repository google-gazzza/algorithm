// validate-code-with-simple-regex
// validate code with simple regex
// difficulty: 8kyu
// codewars.com/kata/53f1015fa9fe02cbda00111a

const validateCode = (code) => /^[1-3]/.test(code);


console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);
