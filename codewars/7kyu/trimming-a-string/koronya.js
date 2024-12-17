// [JS][7kyu] Trimming a string
// trimming-a-string
// https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

const trim = (str, size) => {
  const strLen = str.length
  if (strLen <= size) {
    return str
  }
  const lastIndex = size - 3 <= 0 ? size : size - 3
  return `${str.slice(0, lastIndex)}...`
}

trim('Creating kata is fun', 14) === 'Creating ka...'
trim('He', 1) === 'H...'
trim('Code Wars is pretty rad', 50) === 'Code Wars is pretty rad'
trim('Code Wars is pretty rad', 3)
