// [JS][7kyu] Check RNA Nucleotides
// check-rna-nucleotides
// https://www.codewars.com/kata/5a3325b4b6486ab367000064/train/javascript

const validSet = new Set(['A', 'G', 'C', 'U'])

const checkNucleotides = (sequence) => {
  const arr = sequence.split('')
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const char = arr[i]
    if (!validSet.has(char)) {
      return `There is an invalid letter: ${char}. At position: ${i + 1}`
    }
  }
  return `Valid Sequence: ${sequence}`
}

checkNucleotides('AUAUA') === 'Valid Sequence: AUAUA'
checkNucleotides('UUUUU') === 'Valid Sequence: UUUUU'
checkNucleotides('GAUAB') === 'There is an invalid letter: B. At position: 5'
