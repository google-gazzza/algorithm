// [JS][7kyu] Check three and two
// check-three-and-two
// https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

const checkThreeAndTwo = (array) => {
  const aCount = array.filter((item) => item === 'a').length
  const bCount = array.filter((item) => item === 'b').length
  const cCount = array.filter((item) => item === 'c').length

  return (
    (aCount === 3 && bCount === 2) ||
    (aCount === 2 && bCount === 3) ||
    (aCount === 3 && cCount === 2) ||
    (aCount === 2 && cCount === 3) ||
    (bCount === 3 && cCount === 2) ||
    (bCount === 2 && cCount === 3)
  )
}

checkThreeAndTwo(['a', 'a', 'a', 'b', 'b']) === true
checkThreeAndTwo(['a', 'c', 'a', 'c', 'b']) === false
checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']) === false
