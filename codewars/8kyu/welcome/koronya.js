// [JS][8kyu] Welcome!
// welcome
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

const globalObj = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
}

function greet(language) {
  if (globalObj[language]) {
    return globalObj[language]
  }
  return 'Welcome'
}

greet('english') === 'Welcome'
greet('dutch') === 'Welkom'
greet('IP_ADDRESS_INVALID') === 'Welcome'
