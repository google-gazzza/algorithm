// [JS][8kyu] Triple Trouble
// triple-trouble
// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

const tripleTrouble = (one, two, three) => {
  const strLen = one.length
  return Array.from({ length: strLen })
    .map((_, index) => `${one[index]}${two[index]}${three[index]}`)
    .join('')
}

tripleTrouble('aaa', 'bbb', 'ccc') === 'abcabcabc'
tripleTrouble('aaaaaa', 'bbbbbb', 'cccccc') === 'abcabcabcabcabcabc'
tripleTrouble('burn', 'reds', 'roll') === 'brrueordlnsl'
tripleTrouble('Sea', 'urn', 'pms') === 'Supermans'
tripleTrouble('LLh', 'euo', 'xtr') === 'LexLuthor'
