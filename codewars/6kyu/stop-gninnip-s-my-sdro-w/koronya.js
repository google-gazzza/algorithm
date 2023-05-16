// [JS][6kyu] Stop gninnipS My sdroW!
// stop-gninnip-s-my-sdro-w
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

const spinWords = (string) =>
  string
    .split(' ')
    .map((word) => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ')

spinWords('Welcome') === 'emocleW'
spinWords('Hey fellow warriors') === 'Hey wollef sroirraw'
spinWords('This is a test') === 'This is a test'
spinWords('This is another test') === 'This is rehtona test'
spinWords('You are almost to the last test') === 'You are tsomla to the last test'
spinWords('Just kidding there is still one more') === 'Just gniddik ereht is llits one more'
spinWords('Seriously this is the last one') === 'ylsuoireS this is the last one'
