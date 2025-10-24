// [JS][7kyu] Do you speak retsec?
// do-you-speak-retsec
// https://www.codewars.com/kata/5516ab668915478845000780/train/javascript

const reverseByCenter = (s) => {
  const sLength = s.length
  const mid = Math.floor(sLength / 2)
  const isEven = sLength % 2 === 0
  const left = s.slice(0, mid)
  const right = s.slice(-mid)
  return right + (isEven ? '' : s[mid]) + left
}

reverseByCenter('secret') === 'retsec'
reverseByCenter('agent') === 'nteag'
reverseByCenter('raw') === 'war'
reverseByCenter('onion') === 'onion'
