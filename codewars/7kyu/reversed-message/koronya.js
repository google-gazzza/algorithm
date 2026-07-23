// [JS][7kyu] Reversed Message
// reversed-message
// https://www.codewars.com/kata/5a0efbb7c374cb69970000cf/train/javascript

const getReverseStr = (str) => str.split('').reverse().join('')
const capitalizeStr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
const reverseMessage = (str) => {
  if (str === '') {
    return ''
  }
  return str.split(' ').reverse().map(getReverseStr).map(capitalizeStr).join(' ')
}

reverseMessage('Hello there')

reverseMessage('AaaaA') === 'Aaaaa'
reverseMessage('Hello there') === 'Ereht Olleh'
reverseMessage('Pl34k78j') === 'J87k43lp'
reverseMessage('Reverse this message!') === '!egassem Siht Esrever'
reverseMessage('Today is the 14th of January!') === '!yraunaj Fo Ht41 Eht Si Yadot'
reverseMessage('hty56hA T76#Td') === 'Dt#67t Ah65yth'
reverseMessage('') === ''
