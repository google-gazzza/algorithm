// make-the-deadfish-swim
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

const parse = (data) => {
  const result = [];
  let num = 0;
  
  data.split('')
    .forEach((v) => {
      switch (v) {
        case 'i':
          num += 1;
          break;
        case 'd':
          num -= 1;
          break;
        case 's':
          num = num ** 2;
          break;
        case 'o':
          result.push(num);
      }
    });
  
  return result;
};

console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);
