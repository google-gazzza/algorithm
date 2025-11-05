// [JS][7kyu] Old Greg's Binary Fingers
// old-greg-s-binary-fingers
// https://www.codewars.com/kata/565f1bd8f97d3e59c400014a/train/javascript

const FINGERS = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinkie']

const binaryFingers = (binString) => {
  return binString
    .split('')
    .reverse()
    .map((char, index) => (char === '1' ? FINGERS[index] : null))
    .filter((finger) => finger !== null)
    .reverse()
}

binaryFingers('')
binaryFingers('101')
binaryFingers('111')
binaryFingers('10101')
binaryFingers('11111')
