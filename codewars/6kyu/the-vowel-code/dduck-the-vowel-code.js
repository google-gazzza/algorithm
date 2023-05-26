// the-vowel-code
// https://www.codewars.com/kata/53697be005f803751e0015aa

const encode = (string) => {
  const encodeMap = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  
  return [...string].map((v) => encodeMap[v] || v).join('');
};

const decode = (string) => {
  const decodeMap = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  
  return [...string].map((v) => decodeMap[v] || v).join('');
};

console.log(encode('hello'), 'h2ll4');
//?
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
