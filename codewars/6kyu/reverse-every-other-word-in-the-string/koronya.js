// [JS][6kyu] Reverse every other word in the string
// reverse-every-other-word-in-the-string
// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

const reverse = (str) =>
  str
    .trim()
    .split(' ')
    .map((item, index) => (index % 2 === 0 ? item : item.split('').reverse().join('')))
    .join(' ')

// reverse('')
// reverse('  ')
reverse('Reverse this string, please!') === 'Reverse siht string, !esaelp'
reverse("I really don't like reversing strings!") === "I yllaer don't ekil reversing !sgnirts"
