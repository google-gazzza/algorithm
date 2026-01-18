// [JS][7kyu] Quicksum
// quicksum
// https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript


const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const indexOfUpperAlphabet = (char) => UPPER_ALPHABET.indexOf(char) + 1
const isUpperAlphabetOrSpace = (char) => {
  return UPPER_ALPHABET.includes(char) || char === ' '
}

const quicksum = (packet) => {
  if (packet.split('').some((char) => !isUpperAlphabetOrSpace(char))) {
    return 0
  }
  
  return packet.split('').map((char, index) => indexOfUpperAlphabet(char) * (index + 1)).reduce((sum, curr) => sum + curr, 0)
}





  // quicksum("ACM") === 46
  // quicksum("MID CENTRAL") === 650
  // quicksum("BBC") === 15
  // quicksum("???") === 0
  // quicksum("axg ") === 0
  // quicksum("234 234 WEF ASDF AAA 554211 ???? ") === 0
  // quicksum("A C M") === 75

