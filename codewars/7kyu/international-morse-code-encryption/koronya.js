// [JS][7kyu] International Morse Code Encryption
// international-morse-code-encryption
// https://www.codewars.com/kata/55b8c0276a7930249e00003c/train/javascript

const encryption = (message) =>
  message
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((char) => CHAR_TO_MORSE[char])
        .join(' '),
    )
    .join('   ')

encryption('HELLO WORLD') === '.... . .-.. .-.. ---   .-- --- .-. .-.. -..'
encryption('SOS') === '... --- ...'
encryption('1836') === '.---- ---.. ...-- -....'
encryption('THE QUICK BROWN FOX') === '- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-'
encryption('JUMPED OVER THE') === '.--- ..- -- .--. . -..   --- ...- . .-.   - .... .'
