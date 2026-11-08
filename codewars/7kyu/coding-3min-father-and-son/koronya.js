// [JS][7kyu] Coding 3min: Father and Son
// coding-3min-father-and-son
// https://www.codewars.com/kata/56fe9a0c11086cd842000008/train/javascript.

const isUpperCase = (char) => char === char.toUpperCase()

const sc = (s) => {
  return s
    .split('')
    .filter((char) => (isUpperCase(char) ? s.includes(char.toLowerCase()) : s.includes(char.toUpperCase())))
    .join('')
}

sc('Aab') === 'Aa'
sc('AabBc') === 'AabB'
sc('AaaaAaab') === 'AaaaAaa'
sc('aAAAaAAb') === 'aAAAaAA'
sc('SONson') === 'SONson'
sc('FfAaTtHhEeRr') === 'FfAaTtHhEeRr'
sc('SONsonfather') === 'SONson'
sc('sonfather') === ''
sc('DONKEYmonkey') === 'ONKEYonkey'
sc('monkeyDONKEY') === 'onkeyONKEY'
sc('BANAna') === 'ANAna'
