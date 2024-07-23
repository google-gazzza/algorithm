// [JS][7kyu] Spoonerize Me
// spoonerize-me
// https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript

const spoonerize = (words) => {
  const arr = words.split(' ')
  const arrLen = arr.length
  const firstWordFirstChar = arr[0][0]
  const lastWordFirstChar = arr[arrLen - 1][0]
  arr[0] = lastWordFirstChar + arr[0].slice(1)
  arr[arrLen - 1] = firstWordFirstChar + arr[arrLen - 1].slice(1)

  return arr.join(' ')
}

spoonerize('nit picking') === 'pit nicking'
spoonerize('wedding bells') === 'bedding wells'
spoonerize('jelly beans') === 'belly jeans'
spoonerize('pack of lies')
