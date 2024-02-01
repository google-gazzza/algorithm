// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

const capitalize = (s) => {
  const result = [[], []];
  
  s.split('').forEach((v, i) => {
    result[i % 2].push(v.toUpperCase());
    result[(i % 2 + 1) % 2].push(v);
  });
  
  return [result[0].join(''), result[1].join('')];
};

console.log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
