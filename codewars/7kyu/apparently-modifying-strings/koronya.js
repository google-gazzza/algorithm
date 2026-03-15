// [JS][7kyu] Apparently-Modifying Strings
// apparently-modifying-strings
// https://www.codewars.com/kata/5b049d57de4c7f6a6c0001d7/train/javascript

const apparently = (string) => {
  const arr = string.split(' ')
  return arr
    .map((word, index) => {
      if ((word === 'and' || word === 'but') && arr[index + 1] !== 'apparently') {
        return word + ' apparently'
      }
      return word
    })
    .join(' ')
}

apparently('It was great and I have never been on live television before but sometimes I dont watch this.') ===
  'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.'
apparently('and') === 'and apparently'
apparently('apparently') === 'apparently'

apparently('but but but and and and')
