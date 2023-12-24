// [JS][6kyu] Diamonds and Toads
// diamonds-and-toads
// https://www.codewars.com/kata/57fa537f8b0760c7da000407/train/javascript

const diamondsAndToads = (sentence, fairy) => {
  const charArr = sentence.split('')
  if (fairy === 'good') {
    const ruby = charArr.filter((word) => word === 'r').length + charArr.filter((word) => word === 'R').length * 2
    const crystal = charArr.filter((word) => word === 'c').length + charArr.filter((word) => word === 'C').length * 2
    return { ruby, crystal }
  }
  const python = charArr.filter((word) => word === 'p').length + charArr.filter((word) => word === 'P').length * 2
  const squirrel = charArr.filter((word) => word === 's').length + charArr.filter((word) => word === 'S').length * 2
  return { python, squirrel }
}

diamondsAndToads('Ruby and Crystal', 'good')
diamondsAndToads('This string contain some Ruby and some Crystal in it', 'good')
diamondsAndToads('Python and Squirrel', 'evil')
diamondsAndToads('This string contain some Python and some Squirrel in it', 'evil')
