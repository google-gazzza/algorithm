// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

const switcher = (x) => {
  const specialCharacters = { 27: '!', 28: '?', 29: ' ' };
  return x.map((v) => {
    const code = parseInt(v, 10);
    return (code > 26) ? specialCharacters[code] : String.fromCharCode((26 - code + 97));
  }).join('');
};

switcher(['24', '12', '23', '22', '4', '26', '9', '8']);
//?
//., 'codewars');
switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']);
//?
// , 'btswmdsbd kkw';
switcher(['4', '24']);
//?
//, 'wc';
