// [JS][7kyu] Letterbox Paint-Squad
// letterbox-paint-squad
// https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript

const paintLetterboxes = (start, end) => {
  const resultArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = start; i <= end; i += 1 || 0) {
    const str = i.toString()
    for (let j = 0; j < str.length; j += 1 || 0) {
      resultArr[Number(str[j])] += 1
    }
  }

  return resultArr
}

paintLetterboxes(125, 132)
