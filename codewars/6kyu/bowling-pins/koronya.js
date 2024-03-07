// [JS][6kyu] Bowling Pins
// bowling-pins
// https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript

const bowlingPins = (arr) => {
  const getItem = (pinNumber) => (arr.includes(pinNumber) ? ' ' : 'I')
  const lines = [
    `${getItem(7)} ${getItem(8)} ${getItem(9)} ${getItem(10)}`,
    ` ${getItem(4)} ${getItem(5)} ${getItem(6)} `,
    `  ${getItem(2)} ${getItem(3)}  `,
    `   ${getItem(1)}   `,
  ]
  return lines.join('\n')
}

bowlingPins([2, 3]) === 'I I I I\n I I I \n       \n   I   '
bowlingPins([1, 2, 10]) === 'I I I  \n I I I \n    I  \n       '
