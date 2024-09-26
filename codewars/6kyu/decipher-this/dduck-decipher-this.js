// decipher-this
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

const decipherThis = (str) => str.split(' ')
  .map((v) => {
    const chars = v.match(/[a-zA-Z]+/) ? [...v.match(/[a-zA-Z]+/)[0]] : [];
    [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
    
    return [String.fromCharCode(v.match(/\d+/g)),
      ...chars
    ].join('');
  })
  .join(' ');

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
